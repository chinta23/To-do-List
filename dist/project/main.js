(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerAlign {\n    display: flex;\n    justify-content: center;\n}\n\n.styleBtns {\n    width: 10%;\n    margin: 1%\n}\n\n.nav>li.active > button {\n    background-color: #cd202c;\n    color: #fff;\n}\n\n.redBtn {\n    background: #cd202c;\n    color: #ffffff;\n    padding: 5px;\n}\n\n.blueBtn {\n    background: #124968;\n    color: #ffffff;\n    padding: 5px;\n}\n\n.greyBtn {\n    background: #404040;\n    color: #ffffff;\n}\n\n/* #7f8fa4 */\n\n.nav>li.active > button.subTabs {\n    background: #124968 !important;\n}\n\n.modal-block{\n    position: fixed;\n    top: 0;\n    transition: -webkit-transform .3s ease-out;\n    transition: transform .3s ease-out;\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n    z-index: 200;\n    left: 0;\n    padding: 20px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n  }\n\n.modal-content {\n    overflow-y: scroll;\n    width: 60%;\n    margin: auto;\n    height: 100%;\n  }\n\n.modal-content-md {\n    width: 60%;\n    margin: auto;\n    background: white;\n  }"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n     <ul class=\"nav nav-tabs centerAlign\">\n         <li style=\"width:10%;margin-top: 10px;\">\n           <select [(ngModel)]=\"mdrId\" (ngModelChange)=\"changeMdr()\" class=\"form-control\">\n           <option [value]=\"1\">TM</option>\n           <option [value]=\"'2'\">VM</option>\n           </select>\n         </li> \n        <li class=\"styleBtns active\">\n           <button type=\"button\" data-toggle=\"tab\" data-target=\"#faqPage\" class=\"form-control\">FAQ</button>\n        </li>\n        <li class=\"styleBtns\" style=\"width:15%;\">\n           <button type=\"button\" data-toggle=\"tab\" data-target=\"#mdrPage\" class=\"form-control\">Log Forwarding Steps</button>\n        </li>\n        <li class=\"styleBtns\">\n            <button type=\"button\" data-toggle=\"tab\" data-target=\"#page\" class=\"form-control\"> Repository </button>\n         </li>\n     </ul>\n  </div>\n  <div class=\"tab-content\">\n     <div id=\"faqPage\" class=\"tab-pane fade in active\">\n        <!-- <h3>FAQs</h3> -->\n        <table class=\"table table-condensed table-hover\">\n           <tr>\n              <td><strong>Question</strong></td>\n              <td><strong>Answer</strong></td>\n              <td class=\"centerAlign\">\n                 <div>\n                    <button type=\"button\" title=\"Add New FAQ\" class=\"btn btn-default greyBtn\" (click)=\"openAddFaq()\">Add New +</button>   \n                 </div>\n              </td>\n           </tr>\n           <tr *ngFor=\"let item of allFaqs; let first = first;let last = last;\">\n              <td>{{item.question}}</td>\n              <td>               \n                  <div [innerHTML]=\"trustHTML(item.answer)\"> </div> \n              </td>\n              <td class=\"centerAlign\">\n                 <div class=\"d-flex\">\n                     <button *ngIf=\"!last\" type=\"button\" title=\"{{first}}\" class=\"btn btn-default blueBtn\" (click)=\"movedown(item)\"><i class=\"fas fa-chevron-down\"></i></button>\n                     <button *ngIf=\"!first\" type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"moveup(item)\"><i class=\"fas fa-chevron-up\"></i></button>\n                     <a href=\"{{getLinkForFaqDetail()}}\"><button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" ><i class=\"fas fa-eye\"></i></button></a>\n                     <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdateFaq(item)\"><i class=\"fas fa-edit\"></i></button>\n                     <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"faqDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                 </div>\n              </td>\n           </tr>\n        </table>\n     </div>\n     <div id=\"mdrPage\" class=\"tab-pane fade\">\n        <ul class=\"nav nav-tabs centerAlign\">\n           <li class=\"styleBtns active\" style=\"width: auto;\">\n              <button type=\"button\" data-toggle=\"tab\" data-target=\"#categoryTab\" class=\"form-control subTabs\"> Device Categories </button>\n           </li>\n           <li class=\"styleBtns\">\n              <button type=\"button\" data-toggle=\"tab\" data-target=\"#typesTab\" class=\"form-control subTabs\"> Products </button>\n           </li>\n           <li class=\"styleBtns\">\n              <button type=\"button\" data-toggle=\"tab\" data-target=\"#mdrLogsTab\" class=\"form-control subTabs\"> Procedures </button>\n           </li>\n        </ul>\n        <div class=\"tab-content\">\n           <div id=\"categoryTab\" class=\"tab-pane fade in active\">\n              <!-- <h3>Categories</h3> -->\n              <table class=\"table table-condensed table-hover\">\n                 <tr>\n                    <td><strong>Device Category</strong></td>\n                    <td class=\"centerAlign\">\n                       <div>\n                          <button type=\"button\" title=\"Add New Category\" class=\"btn btn-default greyBtn\" (click)=\"openAddCategory()\">Add New +</button>   \n                       </div>\n                    </td>\n                 </tr>\n                 <tr *ngFor=\"let item of allCategories; let i = index\">\n                    <td>{{item.category_name}}</td>\n                    <td class=\"centerAlign\">\n                       <div>\n                          <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdateCategory(item)\"><i class=\"fas fa-edit\"></i></button>\n                          <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"categoryDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                       </div>\n                    </td>\n                 </tr>\n              </table>\n           </div>\n           <div id=\"typesTab\" class=\"tab-pane fade\">\n              <!-- <h3>Types</h3> -->\n              <table class=\"table table-condensed table-hover\">\n                 <tr>\n                    <td><strong>Device Category</strong></td>\n                    <td><strong>Product</strong></td>\n                    <td><strong> Icon URL</strong></td>\n                    <td><strong>Image Preview</strong></td>\n                    <td class=\"centerAlign\">\n                       <div>\n                          <button type=\"button\" title=\"Add New Type\" class=\"btn btn-default greyBtn\" (click)=\"openAddType()\">Add New +</button>   \n                       </div>\n                    </td>\n                 </tr>\n                 <tr *ngFor=\"let item of allTypes; let i = index\">\n                    <td [innerText]=\"getCategoryName(item.category_id)\"></td>\n                    <td>{{item.type_name}}</td>\n                    <td>{{item.type_image}}</td>\n                    <td><img src=\"{{item.type_image}}\" style=\"height:65px;width:65px\"></td>\n                    <td class=\"centerAlign\">\n                       <div>\n                          <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdateType(item)\"><i class=\"fas fa-edit\"></i></button>\n                          <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"typeDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                       </div>\n                    </td>\n                 </tr>\n              </table>\n           </div>\n           <div id=\"mdrLogsTab\" class=\"tab-pane fade\">\n              <!-- <h3>MDR Logs</h3> -->\n              <table class=\"table table-condensed table-hover\">\n                 <tr>\n                    <td><strong>Device Category</strong></td>\n                    <td><strong>Product</strong></td>\n                    <td><strong>Version</strong></td>\n                    <td><strong>Short Description</strong></td>\n                    <td><strong>Long Description</strong></td>\n                    <td class=\"centerAlign\">\n                       <div>\n                          <button type=\"button\" title=\"Add New\" class=\"btn btn-default greyBtn\" (click)=\"openAddMdrLogs()\">Add New +</button>   \n                       </div>\n                    </td>\n                 </tr>\n                 <tr *ngFor=\"let item of allMdrLogs; let i = index\">\n                    <td [innerText]=\"getCategoryName(item.category_id)\"></td>\n                    <td [innerText]=\"getTypeName(item.type_id)\"></td>\n                    <td>\n                       <div style=\"height: 64px; overflow:hidden;\">\n                          {{item.title}} \n                       </div>\n                    </td>\n                    <td>\n                       <div style=\"height: 64px; overflow:hidden;\">\n                          {{item.short_desc}}\n                       </div>\n                    </td>\n                    <td>\n                       <div style=\"height: 64px; overflow:hidden;\" [innerHTML]=\"trustHTML(item.long_desc)\">\n                       </div>\n                    </td>\n                    <td class=\"centerAlign\">\n                       <div>\n                         <a href=\"{{getLinkForMdr(item.id)}}\"><button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" ><i class=\"fas fa-eye\"></i></button></a>\n                          <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdateMdrLogs(item)\"><i class=\"fas fa-edit\"></i></button>\n                          <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"mdrLogsDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                       </div>\n                    </td>\n                 </tr>\n              </table>\n           </div>\n        </div>\n     </div>\n     <div id=\"page\" class=\"tab-pane fade\">\n         <ul class=\"nav nav-tabs centerAlign\">\n            <li class=\"styleBtns active\">\n               <button type=\"button\" data-toggle=\"tab\" data-target=\"#pageTab\" class=\"form-control subTabs\">Page</button>\n            </li>\n            <li class=\"styleBtns\">\n               <button type=\"button\" data-toggle=\"tab\" data-target=\"#iconTab\" class=\"form-control subTabs\">Icon</button>\n            </li>\n         </ul>\n\n      <div class=\"tab-content\">\n        \n        <div id=\"pageTab\" class=\"tab-pane fade in active\">\n            <table class=\"table table-condensed table-hover\">\n                  <tr>\n                     <td> <strong>Version</strong></td>\n                     <td><strong>Content</strong></td>\n                     <td><strong>Link (To be Copied)</strong></td>\n                     <td class=\"centerAlign\">\n                        <div>\n                           <button type=\"button\" title=\"Add New FAQ\" class=\"btn btn-default greyBtn\" (click)=\"openAddPage()\">Add New +</button>   \n                        </div>\n                     </td>\n                  </tr>\n                  <tr *ngFor=\"let item of allPages; let i = index\">\n                     <td> {{item.title}} </td>\n                     <td [innerHTML]=\"trustHTML(item.content)\"></td>\n                     <td>\n                        <div> <a href=\"{{getLinkAddress(item.id)}}\">{{getLinkAddress(item.id)}}</a> </div>\n\n                     </td>\n                     <td class=\"centerAlign\">\n                        <div>\n                            <a href=\"{{ getLinkForPageDetails(item.id)}}\"><button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" ><i class=\"fas fa-eye\"></i></button></a>\n                           <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdatePage(item)\"><i class=\"fas fa-edit\"></i></button>\n                           <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"pageDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                        </div>\n                     </td>\n                  </tr>\n            </table>\n        </div>\n        <div id=\"iconTab\" class=\"tab-pane fade\">\n            <table class=\"table table-condensed table-hover\">\n                  <tr>\n                     <td> <strong> Version </strong></td>\n                     <td><strong>Link</strong></td>\n                     <td><strong>Image Preview</strong></td>\n                     <td class=\"centerAlign\">\n                        <div>\n                           <button type=\"button\" title=\"Add New FAQ\" class=\"btn btn-default greyBtn\" (click)=\"openAddIcon()\">Add New +</button>   \n                        </div>\n                     </td>\n                  </tr>\n                  <tr *ngFor=\"let item of allIcons; let i = index\">\n                     <td> {{item.title}} </td>\n                     <td> <a href=\"{{item.icon_url}}\">{{item.icon_url}}</a></td>\n                     <td><img src=\"{{item.icon_url}}\" style=\"height:65px;width:65px\">\n                        <!-- <div> <a href=\"{{getLinkAddress(item.id)}}\">{{getLinkAddress(item.id)}}</a> </div> -->\n                     </td>\n                     <td class=\"centerAlign\">\n                        <div>\n                           <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdateIcon(item)\"><i class=\"fas fa-edit\"></i></button>\n                           <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"iconDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                        </div>\n                     </td>\n                  </tr>\n            </table>\n        </div>\n        <div id=\"docTab\" class=\"tab-pane fade\">\n         <table class=\"table table-condensed table-hover\">\n               <tr>\n                  <td> <strong> Version </strong></td>\n                  <td><strong>Link</strong></td>\n                  <td><strong>Image Preview</strong></td>\n                  <td class=\"centerAlign\">\n                     <div>\n                        <button type=\"button\" title=\"Add New FAQ\" class=\"btn btn-default greyBtn\" (click)=\"openAddIcon()\">Add New +</button>   \n                     </div>\n                  </td>\n               </tr>\n               <tr *ngFor=\"let item of allIcons; let i = index\">\n                  <td> {{item.title}} </td>\n                  <td> <a href=\"{{item.icon_url}}\">{{item.icon_url}}</a></td>\n                  <td><img src=\"{{item.icon_url}}\" style=\"height:65px;width:65px\">\n                     <!-- <div> <a href=\"{{getLinkAddress(item.id)}}\">{{getLinkAddress(item.id)}}</a> </div> -->\n                  </td>\n                  <td class=\"centerAlign\">\n                     <div>\n                        <button type=\"button\" title=\"Edit\" class=\"btn btn-default blueBtn\" (click)=\"openUpdateIcon(item)\"><i class=\"fas fa-edit\"></i></button>\n                        <button type=\"button\" title=\"Delete\" class=\"btn btn-default redBtn\" (click)=\"iconDelete(item)\"><i class=\"fas fa-trash\"></i></button>\n                     </div>\n                  </td>\n               </tr>\n         </table>\n        </div>\n        \n      </div>\n\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"updateFaq\">\n     <div class=\"modal-content\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeUpdateFaq()\" >&times;</button>\n           <h4 class=\"modal-title\">Update FAQ</h4>\n        </div>\n        <form [formGroup]=\"faqUpdateForm\" (ngSubmit)=\"faqUpdate()\">\n        <div class=\"modal-body\">\n           <input type=\"hidden\" formControlName=\"updateId\" class=\"form-control\" />\n           <textarea id=\"question\" placeholder=\"Add a Question\" formControlName=\"updateQuestion\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <ck-editor name=\"updateAnswer\" formControlName=\"updateAnswer\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeUpdateFaq()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"updateCategory\">\n     <div class=\"modal-content-md\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeUpdateCategory()\" >&times;</button>\n           <h4 class=\"modal-title\">Update Category</h4>\n        </div>\n        <form [formGroup]=\"categoryUpdateForm\" (ngSubmit)=\"categoryUpdate()\">\n        <div class=\"modal-body\">\n           <input type=\"hidden\" formControlName=\"updateCategoryId\" class=\"form-control\" />\n           <textarea placeholder=\"Update Device Category\" formControlName=\"updateCategoryName\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeUpdateCategory()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"updateType\">\n     <div class=\"modal-content-md\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeUpdateType()\" >&times;</button>\n           <h4 class=\"modal-title\">Update Type</h4>\n        </div>\n        <form [formGroup]=\"typeUpdateForm\" (ngSubmit)=\"typeUpdate()\">\n        <div class=\"modal-body\">\n           <input type=\"hidden\" formControlName=\"updateTypeId\" class=\"form-control\" />\n           <select formControlName=\"updateCategory_Id\" class=\"form-control\" style=\"margin: 5px;\">\n              <option *ngFor=\"let item of allCategories; let i = index\" value={{item.id}}>{{item.category_name}}</option>\n           </select>\n           <!-- <textarea placeholder=\"Update Category\" formControlName=\"updateCategory_Id\" class=\"form-control\" class=\"form-control\" style=\"margin: 5px;\"></textarea> -->\n           <textarea placeholder=\"Update Category Product\" formControlName=\"updateCategoryTypeName\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <!-- <input type=\"file\" class=\"form-control\" style=\"margin: 5px;\" formControlName=\"updateCategoryTypeImg\"/> -->\n           <textarea placeholder=\"Update Category Type Image\" formControlName=\"updateCategoryTypeImage\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeUpdateType()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"updateMdrLogs\">\n     <div class=\"modal-content\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeUpdateMdrLogs()\" >&times;</button>\n           <h4 class=\"modal-title\">Update MDR Logs</h4>\n        </div>\n        <form [formGroup]=\"mdrLogsUpdateForm\" (ngSubmit)=\"mdrLogsUpdate()\">\n        <div class=\"modal-body\">\n           <input type=\"hidden\" formControlName=\"updateMdrId\" class=\"form-control\" />\n           <select formControlName=\"update_Category_Id\" class=\"form-control\" style=\"margin: 5px;\">\n              <option *ngFor=\"let item of allCategories; let i = index\" value={{item.id}}>{{item.category_name}}</option>\n           </select>\n           <select formControlName=\"updateCategoryType_Id\" class=\"form-control\" style=\"margin: 5px;\">\n              <option *ngFor=\"let item of allTypes; let i = index\" value={{item.id}}>{{item.type_name}}</option>\n           </select>\n           <!-- <textarea placeholder=\"Update Category\" formControlName=\"update_Category_Id\" class=\"form-control\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n              <textarea placeholder=\"Update Category Product\" formControlName=\"updateCategoryType_Id\" class=\"form-control\" style=\"margin: 5px;\"></textarea> -->\n           <textarea placeholder=\"Update Title\" formControlName=\"updateTitle\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <textarea placeholder=\"Update Short Desc\" formControlName=\"updateShortDesc\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <ck-editor name=\"updateLongDesc\" formControlName=\"updateLongDesc\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeUpdateMdrLogs()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"updatePage\">\n      <div class=\"modal-content-md\">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"closeUpdatePage()\" >&times;</button>\n            <h4 class=\"modal-title\">Update Page</h4>\n         </div>\n         <form [formGroup]=\"pageUpdateForm\" (ngSubmit)=\"pageUpdate()\">\n         <div class=\"modal-body\">\n            <input type=\"hidden\" formControlName=\"updatePageId\" class=\"form-control\" />\n            <textarea  placeholder=\"Update Page Title\" formControlName=\"updatePageTitle\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n            <ck-editor formControlName=\"updatePageContent\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n         </div>\n         <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeUpdatePage()\" >Cancel</button>\n         </div>\n         </form>\n      </div>\n   </div>\n   <div class=\"modal-block\" *ngIf=\"updateIcon\">\n      <div class=\"modal-content-md\">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"closeUpdateIcon()\" >&times;</button>\n            <h4 class=\"modal-title\">Update Icon</h4>\n         </div>\n         <form [formGroup]=\"typeUpdateForm\" (ngSubmit)=\"iconUpdate()\">\n         <div class=\"modal-body\">\n            <input type=\"hidden\" formControlName=\"updateIconId\" class=\"form-control\" />             \n              <textarea placeholder=\"Update Icon\" formControlName=\"updateCategoryTypeName\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           </div>\n         <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeUpdateType()\" >Cancel</button>\n         </div>\n         </form>\n      </div>\n   </div>\n  <div class=\"modal-block\" *ngIf=\"addFaq\">\n     <div class=\"modal-content\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeAddFaq()\" >&times;</button>\n           <h4 class=\"modal-title\">Add New FAQ</h4>\n        </div>\n        <form [formGroup]=\"faqAddForm\" (ngSubmit)=\"faqAdd()\">\n        <div class=\"modal-body\">\n            <textarea id=\"question\" placeholder=\"Add a Question\" formControlName=\"question\" class=\"form-control\" style=\"margin: 5px;\"></textarea> \n           <!-- <textarea id=\"answer\" placeholder=\"Add answer\" formControlName=\"answer\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n              -->\n           \n\n          <div style=\"padding:5px\">\n               \n            <ck-editor name=\"answer\" formControlName=\"answer\"  skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor> \n          </div>\n            \n            \n            \n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeAddFaq()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"addCategory\">\n     <div class=\"modal-content-md \">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeAddCategory()\" >&times;</button>\n           <h4 class=\"modal-title\">Add New Category</h4>\n        </div>\n        <form [formGroup]=\"categoryAddForm\" (ngSubmit)=\"categoryAdd()\">\n        <div class=\"modal-body\">                   \n           <textarea placeholder=\"Add Category\" formControlName=\"category\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeAddCategory()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"addType\">\n     <div class=\"modal-content-md\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeAddType()\" >&times;</button>\n           <h4 class=\"modal-title\">Add New Type</h4>\n        </div>\n          <form  #f=\"ngForm\" (ngSubmit)=\"typeAdd(f)\" novalidate>\n        <div class=\"modal-body\">\n           <select name=\"category_id\" ngModel class=\"form-control\" style=\"margin: 5px;\">\n              <option *ngFor=\"let item of allCategories;let i = index\" value={{item.id}}>{{item.category_name}}</option>\n           </select>\n             <textarea placeholder=\"Add Category Product\" name=\"type_name\" ngModel class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <input #fileInput type=\"file\" name=\"type_image\" ngModel class=\"form-control\" style=\"margin: 5px;\"  accept=\".png, .jpg, .jpeg\" (change)=\"onFileChanged($event)\" > \n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeAddType()\" >Cancel</button>\n        </div>\n        </form>  \n\n       <!-- <input type=\"file\" name=\"type_image\" ng2FileSelect [uploader]=\"uploader\" />\n      <button type=\"button\" class=\"btn btn-success btn-s\" \n      (click)=\"uploader.uploadAll()\" \n         >\n            Upload an Image\n      </button> -->\n\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"addMdrLogs\">\n     <div class=\"modal-content\">\n        <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" (click)=\"closeAddMdrLogs()\" >&times;</button>\n           <h4 class=\"modal-title\">Add MDR Logs</h4>\n        </div>\n        <form [formGroup]=\"mdrLogsAddForm\" (ngSubmit)=\"mdrLogsAdd()\">\n        <div class=\"modal-body\">\n           <select formControlName=\"mdr_category_id\" class=\"form-control\" style=\"margin: 5px;\">\n              <option *ngFor=\"let item of allCategories; let i = index\" value={{item.id}}>{{item.category_name}}</option>\n           </select>\n           <select formControlName=\"mdr_type_id\" class=\"form-control\" style=\"margin: 5px;\">\n              <option *ngFor=\"let item of allTypes; let i = index\" value={{item.id}}>{{item.type_name}}</option>\n           </select>\n           <!-- <textarea placeholder=\"Add Category\" formControlName=\"mdr_category_id\" class=\"form-control\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n              <textarea placeholder=\"Add Category Product\" formControlName=\"mdr_category_type_id\" class=\"form-control\" style=\"margin: 5px;\"></textarea> -->\n           <textarea placeholder=\"Add Title\" formControlName=\"title\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <textarea placeholder=\"Add Short Description\" formControlName=\"short_desc\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n           <ck-editor name=\"long_desc\" formControlName=\"long_desc\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n           <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeAddMdrLogs()\" >Cancel</button>\n        </div>\n        </form>\n     </div>\n  </div>\n  <div class=\"modal-block\" *ngIf=\"addPage\">\n      <div class=\"modal-content-md \">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"closeAddPage()\" >&times;</button>\n            <h4 class=\"modal-title\">Add New Page</h4>\n         </div>\n         <form [formGroup]=\"pageAddForm\" (ngSubmit)=\"pageAdd()\">\n         <div class=\"modal-body\">   \n            <textarea placeholder=\"Add Title\" formControlName=\"title\" class=\"form-control\" style=\"margin: 5px;\"></textarea>\n            <ck-editor name=\"content\" formControlName=\"content\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>       \n         </div>\n         <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeAddPage()\" >Cancel</button>\n         </div>\n         </form>\n      </div>\n  </div>\n\n  <div class=\"modal-block\" *ngIf=\"addIcon\">\n      <div class=\"modal-content-md \">\n         <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"closeAddIcon()\" >&times;</button>\n            <h4 class=\"modal-title\">Add New Icon</h4>\n         </div>\n         <form  #f=\"ngForm\" (ngSubmit)=\"iconAdd(f)\" novalidate>\n         <div class=\"modal-body\"> \n            <input type=\"text\" placeholder=\"Add Title\" name=\"title\" ngModel class=\"form-control\" style=\"margin: 5px;\">\n            <input #fileInputForIcon type=\"file\" name=\"icon_image\" ngModel class=\"form-control\" style=\"margin: 5px;\"  accept=\".png, .jpg, .jpeg\" (change)=\"onFileChanged($event)\" >   \n            \n         </div>\n         <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-primary blueBtn\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default redBtn\" (click)=\"closeAddIcon()\" >Cancel</button>\n         </div>\n         </form>\n      </div>\n  </div>\n\n</div>\n\n\n "

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminComponent = /** @class */ (function () {
    function AdminComponent(sanitizer, formBuilder, paladionService, cookieService, http) {
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.paladionService = paladionService;
        this.cookieService = cookieService;
        this.http = http;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: 'http://localhost:3000/api/type', itemAlias: 'type_image' });
        this.html = this.sanitizer.bypassSecurityTrustHtml('<span style="color:red">this works</span>');
        this.selCategories = [];
        this.typeByCategory = [];
        this.selData = [];
        this.updateFaq = false;
        this.updateCategory = false;
        this.updateType = false;
        this.updateMdrLogs = false;
        this.updatePage = false;
        this.updateIcon = false;
        this.addFaq = false;
        this.addCategory = false;
        this.addType = false;
        this.addMdrLogs = false;
        this.addPage = false;
        this.addIcon = false;
        this.faqAddForm = {
            question: '',
            answer: ''
        };
        this.faqUpdateForm = {
            updateId: '',
            updateQuestion: '',
            updateAnswer: ''
        };
        this.categoryAddForm = {
            category: ''
        };
        this.categoryUpdateForm = {
            updateCategoryId: '',
            updateCategoryName: ''
        };
        this.typeAddForm = {
            category_id: '',
            type_name: '',
            type_image: ''
        };
        this.iconAddForm = {
            title: '',
            icon: ''
        };
        this.typeUpdateForm = {
            updateTypeId: '',
            updateCategory_Id: '',
            updateCategoryTypeName: '',
            updateCategoryTypeImage: ''
        };
        this.mdrLogsAddForm = {
            mdr_category_id: '',
            mdr_type_id: '',
            title: '',
            short_desc: '',
            long_desc: ''
        };
        this.mdrLogsUpdateForm = {
            updateMdrId: '',
            updateTitle: '',
            updateShortDesc: '',
            updateLongDesc: '',
            updateCategoryType_Id: '',
            update_Category_Id: ''
        };
        this.pageAddForm = {
            title: '',
            content: ''
        };
        this.pageUpdateForm = {
            updatePageId: '',
            updatePageContent: '',
            updatePageTitle: ''
        };
        this.iconUpdateForm = {
            updateIconId: '',
            updateIconTitle: '',
            updateIconUrl: ''
        };
        this.data = [
            { category: '01', type: 'Windows' },
            { category: '01', type: 'Linux' },
            { category: '01', type: 'Oracle Solaris' },
            { category: 'Databases', type: 'Oracle' },
            { category: 'Databases', type: 'Microsoft SQL' },
            { category: 'Firewall', type: 'Fortinet' },
            { category: 'Firewall', type: 'Cisco' }
        ];
        this.selectedFile = null;
        this.cookieValue = 'UNKNOWN';
        this.mdrId = 1;
        this.faqAddForm = this.formBuilder.group({
            'question': [''],
            'answer': ['']
        });
        this.faqUpdateForm = this.formBuilder.group({
            'updateId': [''],
            'updateQuestion': [''],
            'updateAnswer': ['']
        });
        this.categoryAddForm = this.formBuilder.group({
            'category': ['']
        });
        this.categoryUpdateForm = this.formBuilder.group({
            'updateCategoryId': [''],
            'updateCategoryName': ['']
        });
        this.typeAddForm = this.formBuilder.group({
            'category_id': [''],
            'type_name': [''],
            'type_image': ['']
        });
        this.iconAddForm = this.formBuilder.group({
            'title': ['']
        });
        this.typeUpdateForm = this.formBuilder.group({
            'updateTypeId': [''],
            'updateCategory_Id': [''],
            'updateCategoryTypeName': [''],
            'updateCategoryTypeImage': ['']
        });
        this.mdrLogsAddForm = this.formBuilder.group({
            "mdr_category_id": [''],
            "mdr_type_id": [''],
            "title": [''],
            "short_desc": [''],
            "long_desc": ['']
        });
        this.mdrLogsUpdateForm = this.formBuilder.group({
            'updateMdrId': [''],
            'updateTitle': [''],
            'updateShortDesc': [''],
            'updateLongDesc': [''],
            'updateCategoryType_Id': [''],
            'update_Category_Id': ['']
        });
        this.pageAddForm = this.formBuilder.group({
            'title': [''],
            'content': ['']
        });
        this.pageUpdateForm = this.formBuilder.group({
            'updatePageId': [''],
            'updatePageContent': [],
            'updatePageTitle': ['']
        });
    }
    AdminComponent.prototype.getCategoryByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getCategoryByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allCategories = data.data;
        });
    };
    AdminComponent.prototype.getFaqByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getFaqByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allFaqs = data.data;
        });
    };
    AdminComponent.prototype.getTypeByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getTypeByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allTypes = data.data;
        });
    };
    AdminComponent.prototype.getAllTypesForAdmin = function () {
        var _this = this;
        this.paladionService.getAllTypesForAdmin().subscribe(function (data) {
            _this.allTypes = data.data;
        });
    };
    AdminComponent.prototype.getAllMdrLogs = function () {
        var _this = this;
        this.paladionService.getAllMdrLogs().subscribe(function (data) {
            _this.allMdrLogs = data.data;
        });
    };
    AdminComponent.prototype.getMdrByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getMdrByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allMdrLogs = data.data;
        });
    };
    AdminComponent.prototype.getPageByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getPageByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allPages = data.data;
        });
    };
    AdminComponent.prototype.getIconByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getIconByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allIcons = data.data;
        });
    };
    AdminComponent.prototype.openCity = function (evt, tabId) {
        console.log('in fn!!');
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabId).style.display = "block";
        evt.currentTarget.className += " active";
    };
    AdminComponent.prototype.filterCategories = function (filterVal) {
        // console.log(filterVal);
        this.selCategories.push(filterVal);
        // console.log(this.selCategories);
    };
    AdminComponent.prototype.typeBasedOnCategory = function (categ) {
        console.log(categ);
        this.typeByCategory = this.data.filter(function (item) { return item.category == categ; });
        console.log(this.typeByCategory);
    };
    AdminComponent.prototype.filterTypes = function (filterVal) {
        console.log(filterVal);
        this.selData = filterVal;
        console.log(this.selData);
    };
    AdminComponent.prototype.openAddFaq = function () {
        this.addFaq = true;
    };
    AdminComponent.prototype.closeAddFaq = function () {
        this.addFaq = false;
    };
    AdminComponent.prototype.faqAdd = function () {
        var _this = this;
        console.log(this.faqAddForm.value);
        var data = {
            "question": this.faqAddForm.controls.question.value,
            "answer": this.faqAddForm.controls.answer.value,
            "mdr_type_id": this.mdrId
        };
        this.paladionService.addFaq(data).subscribe(function (data) {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully Added !', 'success');
            _this.getFaqByMdrTypeId();
            _this.addFaq = false;
        });
    };
    AdminComponent.prototype.openUpdateFaq = function (item) {
        console.log(item);
        this.updateFaq = true;
        this.faqUpdateForm.controls.updateId.value = item.id;
        this.faqUpdateForm.controls.updateQuestion.value = item.question;
        this.faqUpdateForm.controls.updateAnswer.value = item.answer;
    };
    AdminComponent.prototype.closeUpdateFaq = function () {
        this.updateFaq = false;
    };
    AdminComponent.prototype.faqUpdate = function () {
        var _this = this;
        console.log(this.faqUpdateForm.value);
        var data = {
            "id": this.faqUpdateForm.controls.updateId.value,
            "question": this.faqUpdateForm.controls.updateQuestion.value,
            "answer": this.faqUpdateForm.controls.updateAnswer.value
        };
        this.paladionService.updateFaq(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully updated FAQ!', 'success');
            _this.getFaqByMdrTypeId();
            _this.updateFaq = false;
        });
    };
    AdminComponent.prototype.faqDelete = function (item) {
        var _this = this;
        console.log(item);
        var data = {
            "id": item.id
        };
        console.log(data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this FAQ!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.paladionService.deleteFaq(data).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Your FAQ has been deleted.', 'success');
                    _this.getFaqByMdrTypeId();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cancelled', 'Your FAQ is safe :)', 'error');
            }
        });
    };
    AdminComponent.prototype.openAddCategory = function () {
        this.addCategory = true;
    };
    AdminComponent.prototype.closeAddCategory = function () {
        this.addCategory = false;
    };
    AdminComponent.prototype.categoryAdd = function () {
        var _this = this;
        var data = [
            {
                "category_name": this.categoryAddForm.controls.category.value,
                "mdr_type_id": this.mdrId
            }
        ];
        this.paladionService.addCategory(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully Added Category!', 'success');
            _this.getCategoryByMdrTypeId();
            _this.addCategory = false;
        });
    };
    AdminComponent.prototype.openUpdateCategory = function (item) {
        console.log(item);
        this.updateCategory = true;
        this.categoryUpdateForm.controls.updateCategoryId.value = item.id;
        this.categoryUpdateForm.controls.updateCategoryName.value = item.category_name;
    };
    AdminComponent.prototype.closeUpdateCategory = function () {
        this.updateCategory = false;
    };
    AdminComponent.prototype.categoryUpdate = function () {
        var _this = this;
        console.log(this.categoryUpdateForm.value);
        var data = {
            "id": this.categoryUpdateForm.controls.updateCategoryId.value,
            "category_name": this.categoryUpdateForm.controls.updateCategoryName.value
        };
        this.paladionService.updateCategory(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully updated Category!', 'success');
            _this.getCategoryByMdrTypeId();
            _this.updateCategory = false;
        });
    };
    AdminComponent.prototype.categoryDelete = function (item) {
        var _this = this;
        var data = {
            "id": item.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Category!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.paladionService.deleteCategory(data).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Category has been deleted.', 'success');
                    _this.getCategoryByMdrTypeId();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cancelled', 'Category is safe :)', 'error');
            }
        });
    };
    AdminComponent.prototype.openAddType = function () {
        this.typeAddForm.controls.category_id.value = '';
        this.typeAddForm.controls.type_name.value = '';
        this.typeAddForm.controls.type_image.value = '';
        this.addType = true;
    };
    AdminComponent.prototype.closeAddType = function () {
        this.addType = false;
    };
    AdminComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = null;
        this.selectedFile = event.target.files[0];
    };
    AdminComponent.prototype.typeAdd = function (f) {
        console.log(f.value.category_id);
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            //this.paladionService.postFile('test', fileToUpload);
            var request = new XMLHttpRequest();
            var endpoint = this.paladionService.BASEURL + 'api/type';
            // POST to httpbin which returns the POST data as JSON
            request.open('POST', endpoint, /* async = */ false);
            var formData = new FormData();
            formData.append('category_id', f.value.category_id);
            formData.append('mdr_type_id', this.mdrId);
            formData.append('type_name', f.value.type_name);
            formData.append('type_image', fileToUpload);
            request.send(formData);
            console.log(request.response);
            var result = JSON.parse(request.response);
            console.log(result);
            if (JSON.parse(request.response).status == 'SUCCESS') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully Added Type!', 'success');
                this.getTypeByMdrTypeId();
                this.addType = false;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Failed!', 'Type Not added!', 'success');
            }
        }
        // let formData: FormData = new FormData();
        // let fi = this.fileInput.nativeElement;
        // if (fi.files && fi.files[0]) {
        //     let fileToUpload = fi.files[0];
        //     this.paladionService.postFile('test', fileToUpload);
        // }
        // var formData = new FormData();
        // formData.append('key1', 'value1');
        // formData.append('key2', 'value2');
        // Display the values
        // for (var value of formData.values()) {
        //    console.log(value); 
        // }
        // const fd =  new FormData();;
        // fd.append('type_image', this.selectedFile, this.selectedFile.name);
        // fd.append('category_id', this.typeAddForm.controls.category_id.value);
        // fd.append('type_name', this.typeAddForm.controls.type_name.value);
        // fd.append('mdr_type_id', this.mdrId);
        // console.log(fd);
        // this.paladionService.addType(uploadData).subscribe(data => {
        //   Swal(
        //     'Poof!',
        //     'Successfully Added Type!',
        //     'success'
        //   )
        //   this.getTypeByMdrTypeId();
        //   this.addType = false;
        // })
    };
    AdminComponent.prototype.openUpdateType = function (item) {
        this.updateType = true;
        this.typeUpdateForm.controls.updateTypeId.value = item.id;
        this.typeUpdateForm.controls.updateCategory_Id.value = item.category_id;
        this.typeUpdateForm.controls.updateCategoryTypeName.value = item.type_name;
        this.typeUpdateForm.controls.updateCategoryTypeImage.value = item.type_image;
    };
    AdminComponent.prototype.closeUpdateType = function () {
        this.updateType = false;
    };
    AdminComponent.prototype.typeUpdate = function () {
        var _this = this;
        console.log(this.typeUpdateForm.value);
        var data = {
            "id": this.typeUpdateForm.controls.updateTypeId.value,
            "type_name": this.typeUpdateForm.controls.updateCategoryTypeName.value,
            "category_id": this.typeUpdateForm.controls.updateCategory_Id.value
        };
        this.paladionService.updateType(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully updated Type!', 'success');
            _this.updateType = false;
            _this.getTypeByMdrTypeId();
        });
    };
    AdminComponent.prototype.typeDelete = function (item) {
        var _this = this;
        var data = {
            "id": item.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Type!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.paladionService.deleteType(data).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Type has been deleted.', 'success');
                    _this.getTypeByMdrTypeId();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cancelled', 'Type is safe :)', 'error');
            }
        });
    };
    AdminComponent.prototype.openAddMdrLogs = function () {
        this.addMdrLogs = true;
    };
    AdminComponent.prototype.closeAddMdrLogs = function () {
        this.addMdrLogs = false;
    };
    AdminComponent.prototype.openAddPage = function () {
        this.addPage = true;
    };
    AdminComponent.prototype.closeAddPage = function () {
        this.addPage = false;
    };
    AdminComponent.prototype.pageAdd = function () {
        var _this = this;
        var data = [{
                'title': this.pageAddForm.controls.title.value,
                "content": this.pageAddForm.controls.content.value,
                "mdr_type_id": this.mdrId
            }];
        this.paladionService.addPage(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully Added Page!', 'success');
            _this.getPageByMdrTypeId();
            _this.addPage = false;
        });
    };
    AdminComponent.prototype.openUpdatePage = function (item) {
        this.updatePage = true;
        this.pageUpdateForm.controls.updatePageId.value = item.id;
        this.pageUpdateForm.controls.updatePageContent.value = item.content;
        this.pageUpdateForm.controls.updatePageTitle.value = item.title;
    };
    AdminComponent.prototype.closeUpdatePage = function () {
        this.updatePage = false;
    };
    AdminComponent.prototype.pageUpdate = function () {
        var _this = this;
        console.log(this.pageUpdateForm.value);
        var data = {
            "id": this.pageUpdateForm.controls.updatePageId.value,
            "content": this.pageUpdateForm.controls.updatePageContent.value,
            "title": this.pageUpdateForm.controls.updatePageTitle.value
        };
        this.paladionService.updatePage(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully updated Page!', 'success');
            _this.getPageByMdrTypeId();
            _this.updatePage = false;
        });
    };
    AdminComponent.prototype.pageDelete = function (item) {
        var _this = this;
        var data = {
            "id": item.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this MDR Log!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.paladionService.deletePage(data).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Page has been deleted.', 'success');
                    _this.getPageByMdrTypeId();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cancelled', 'Page is safe :)', 'error');
            }
        });
    };
    AdminComponent.prototype.openAddIcon = function () {
        this.addIcon = true;
    };
    AdminComponent.prototype.closeAddIcon = function () {
        this.addIcon = false;
    };
    AdminComponent.prototype.iconAdd = function (f) {
        var fi = this.fileInputForIcon.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            var request = new XMLHttpRequest();
            var endpoint = this.paladionService.BASEURL + 'api/icon';
            // POST to httpbin which returns the POST data as JSON
            request.open('POST', endpoint, /* async = */ false);
            var formData = new FormData();
            formData.append('mdr_type_id', this.mdrId);
            formData.append('title', f.value.title);
            formData.append('icon_image', fileToUpload);
            request.send(formData);
            console.log(request.response);
            var result = JSON.parse(request.response);
            console.log(result);
            if (JSON.parse(request.response).status == 'SUCCESS') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully Added Type!', 'success');
                this.getIconByMdrTypeId();
                this.addIcon = false;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Failed!', 'Type Not added!', 'success');
            }
        }
    };
    AdminComponent.prototype.openUpdateIcon = function (item) {
        this.updateIcon = true;
        this.iconUpdateForm.controls.updateIconId.value = item.id;
        this.iconUpdateForm.controls.updateIconTitle.value = item.title;
        this.iconUpdateForm.controls.updateIconUrl.value = item.icon_url;
    };
    AdminComponent.prototype.closeUpdateIcon = function () {
        this.updateIcon = false;
    };
    AdminComponent.prototype.iconUpdate = function () {
        var _this = this;
        console.log(this.pageUpdateForm.value);
        var data = {
            "id": this.pageUpdateForm.controls.updatePageId.value,
            "content": this.pageUpdateForm.controls.updatePageContent.value,
            "title": this.pageUpdateForm.controls.updatePageTitle.value
        };
        this.paladionService.updatePage(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully updated Page!', 'success');
            _this.getPageByMdrTypeId();
            _this.updatePage = false;
        });
    };
    AdminComponent.prototype.iconDelete = function (item) {
        var _this = this;
        var data = {
            "id": item.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Icon!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.paladionService.deleteIcon(data).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Icon has been deleted.', 'success');
                    _this.getIconByMdrTypeId();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cancelled', 'Icon is safe :)', 'error');
            }
        });
    };
    AdminComponent.prototype.mdrLogsAdd = function () {
        var _this = this;
        var data = [{
                "category_id": this.mdrLogsAddForm.controls.mdr_category_id.value,
                "type_id": this.mdrLogsAddForm.controls.mdr_type_id.value,
                "title": this.mdrLogsAddForm.controls.title.value,
                "short_desc": this.mdrLogsAddForm.controls.short_desc.value,
                "long_desc": this.mdrLogsAddForm.controls.long_desc.value,
                "mdr_type_id": this.mdrId
            }];
        this.paladionService.addMdrLogs(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully Added Type!', 'success');
            _this.getMdrByMdrTypeId();
            _this.addMdrLogs = false;
        });
    };
    AdminComponent.prototype.openUpdateMdrLogs = function (item) {
        this.updateMdrLogs = true;
        this.mdrLogsUpdateForm.controls.updateMdrId.value = item.id;
        this.mdrLogsUpdateForm.controls.updateTitle.value = item.title;
        this.mdrLogsUpdateForm.controls.updateShortDesc.value = item.short_desc;
        this.mdrLogsUpdateForm.controls.updateLongDesc.value = item.long_desc;
        this.mdrLogsUpdateForm.controls.update_Category_Id.value = item.category_id;
        this.mdrLogsUpdateForm.controls.updateCategoryType_Id.value = item.type_id;
    };
    AdminComponent.prototype.closeUpdateMdrLogs = function () {
        this.updateMdrLogs = false;
    };
    AdminComponent.prototype.mdrLogsUpdate = function () {
        var _this = this;
        console.log(this.mdrLogsUpdateForm.value);
        var data = {
            "id": this.mdrLogsUpdateForm.controls.updateMdrId.value,
            "category_id": this.mdrLogsUpdateForm.controls.update_Category_Id.value,
            "type_id": this.mdrLogsUpdateForm.controls.updateCategoryType_Id.value,
            "title": this.mdrLogsUpdateForm.controls.updateTitle.value,
            "short_desc": this.mdrLogsUpdateForm.controls.updateShortDesc.value,
            "long_desc": this.mdrLogsUpdateForm.controls.updateLongDesc.value
        };
        this.paladionService.updateMdrLogs(data).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Poof!', 'Successfully updated MDR Logs!', 'success');
            _this.getMdrByMdrTypeId();
            _this.updateMdrLogs = false;
        });
    };
    AdminComponent.prototype.mdrLogsDelete = function (item) {
        var _this = this;
        var data = {
            "id": item.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this MDR Log!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.paladionService.deleteMdrLogs(data).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'MDR Log has been deleted.', 'success');
                    _this.getMdrByMdrTypeId();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cancelled', 'MDR Log is safe :)', 'error');
            }
        });
    };
    AdminComponent.prototype.getCategoryName = function (catId) {
        var catName = '';
        this.allCategories.forEach(function (category) {
            if (category.id == catId) {
                catName = category.category_name;
            }
        });
        return catName;
    };
    AdminComponent.prototype.getTypeName = function (typeId) {
        var typeName = '';
        this.allTypes.forEach(function (type) {
            if (type.id == typeId) {
                typeName = type.type_name;
            }
        });
        return typeName;
    };
    AdminComponent.prototype.getLinkAddress = function (id) {
        if (this.mdrId == 1) {
            return this.paladionService.getUiBase() + 'tm/page/' + id;
        }
        if (this.mdrId == 2) {
            return this.paladionService.getUiBase() + 'vm/page/' + id;
        }
    };
    AdminComponent.prototype.getLinkForMdr = function (id) {
        if (this.mdrId == 1) {
            //var datatype1='f9fa2cdd8cacb7';
            return this.paladionService.getUiBase() + 'tm/mdrdetail/' + id;
        }
        if (this.mdrId == 2) {
            return this.paladionService.getUiBase() + 'vm/mdrdetail/' + id;
        }
    };
    AdminComponent.prototype.getLinkForPageDetails = function (id) {
        if (this.mdrId == 1) {
            //var datatype1='f9fa2cdd8cacb7';
            return this.paladionService.getUiBase() + 'tm/page/' + id;
        }
        if (this.mdrId == 2) {
            return this.paladionService.getUiBase() + 'vm/page/' + id;
        }
    };
    AdminComponent.prototype.getLinkForFaqDetail = function () {
        if (this.mdrId == 1) {
            //var datatype1='f9fa2cdd8cacb7';
            // return this.paladionService.getUiBase()+'tm/faqdetails';
            return this.paladionService.getUiBase() + 'tm/faq';
        }
        if (this.mdrId == 2) {
            //return this.paladionService.getUiBase()+'tm/faqdetails';
            return this.paladionService.getUiBase() + 'vm/faq';
        }
    };
    AdminComponent.prototype.moveup = function (data) {
        var _this = this;
        var obj = {
            "id": data.id,
            "mdr_type_id": this.mdrId
        };
        this.paladionService.moveup(obj).subscribe(function (data) {
            _this.getFaqByMdrTypeId();
        });
    };
    AdminComponent.prototype.movedown = function (data) {
        var _this = this;
        var obj = {
            "id": data.id,
            "mdr_type_id": this.mdrId
        };
        this.paladionService.movedown(obj).subscribe(function (data) {
            _this.getFaqByMdrTypeId();
        });
    };
    AdminComponent.prototype.changeMdr = function () {
        this.getFaqByMdrTypeId();
        this.getCategoryByMdrTypeId();
        this.getMdrByMdrTypeId();
        this.getTypeByMdrTypeId();
        this.getPageByMdrTypeId();
        this.getIconByMdrTypeId();
        //this.cookieService.set( 'mdrId', this.mdrId );
    };
    AdminComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            alert('File uploaded successfully');
        };
        if (this.mdrId) {
            this.getFaqByMdrTypeId();
        }
        this.getCategoryByMdrTypeId();
        this.getTypeByMdrTypeId();
        this.getMdrByMdrTypeId();
        this.getPageByMdrTypeId();
        this.getIconByMdrTypeId();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileInput"),
        __metadata("design:type", Object)
    ], AdminComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileInputForIcon"),
        __metadata("design:type", Object)
    ], AdminComponent.prototype, "fileInputForIcon", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["PaladionService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" \n      [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n      {{message.text}}\n</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/lib/src/index.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_ckeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mdr_mdr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mdr/mdr.component */ "./src/app/mdr/mdr.component.ts");
/* harmony import */ var _mdr_detail_mdr_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mdr-detail/mdr-detail.component */ "./src/app/mdr-detail/mdr-detail.component.ts");
/* harmony import */ var _vm_faq_vm_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vm-faq/vm-faq.component */ "./src/app/vm-faq/vm-faq.component.ts");
/* harmony import */ var _tm_faq_tm_faq_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tm-faq/tm-faq.component */ "./src/app/tm-faq/tm-faq.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _vm_cat_vm_cat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vm-cat/vm-cat.component */ "./src/app/vm-cat/vm-cat.component.ts");
/* harmony import */ var _tm_cat_tm_cat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tm-cat/tm-cat.component */ "./src/app/tm-cat/tm-cat.component.ts");
/* harmony import */ var _vm_mdr_vm_mdr_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vm-mdr/vm-mdr.component */ "./src/app/vm-mdr/vm-mdr.component.ts");
/* harmony import */ var _tm_mdr_tm_mdr_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tm-mdr/tm-mdr.component */ "./src/app/tm-mdr/tm-mdr.component.ts");
/* harmony import */ var _tm_mdr_detail_tm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tm-mdr-detail/tm-mdr-detail.component */ "./src/app/tm-mdr-detail/tm-mdr-detail.component.ts");
/* harmony import */ var _vm_mdr_detail_vm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./vm-mdr-detail/vm-mdr-detail.component */ "./src/app/vm-mdr-detail/vm-mdr-detail.component.ts");
/* harmony import */ var _guard_admin__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guard-admin */ "./src/app/guard-admin.ts");
/* harmony import */ var _guard_user__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./guard-user */ "./src/app/guard-user.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _vm_page_vm_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./vm-page/vm-page.component */ "./src/app/vm-page/vm-page.component.ts");
/* harmony import */ var _tm_page_tm_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tm-page/tm-page.component */ "./src/app/tm-page/tm-page.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tm_faq_detail_tm_faq_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tm-faq-detail/tm-faq-detail.component */ "./src/app/tm-faq-detail/tm-faq-detail.component.ts");
/* harmony import */ var _vm_faq_detail_vm_faq_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./vm-faq-detail/vm-faq-detail.component */ "./src/app/vm-faq-detail/vm-faq-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__["FaqComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _mdr_mdr_component__WEBPACK_IMPORTED_MODULE_15__["MdrComponent"],
                _mdr_detail_mdr_detail_component__WEBPACK_IMPORTED_MODULE_16__["MdrDetailComponent"],
                _vm_faq_vm_faq_component__WEBPACK_IMPORTED_MODULE_17__["VmFaqComponent"],
                _tm_faq_tm_faq_component__WEBPACK_IMPORTED_MODULE_18__["TmFaqComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_19__["PageComponent"],
                _vm_cat_vm_cat_component__WEBPACK_IMPORTED_MODULE_21__["VmCatComponent"],
                _tm_cat_tm_cat_component__WEBPACK_IMPORTED_MODULE_22__["TmCatComponent"],
                _vm_mdr_vm_mdr_component__WEBPACK_IMPORTED_MODULE_23__["VmMdrComponent"],
                _tm_mdr_tm_mdr_component__WEBPACK_IMPORTED_MODULE_24__["TmMdrComponent"],
                _tm_mdr_detail_tm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_25__["TmMdrDetailComponent"],
                _vm_mdr_detail_vm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_26__["VmMdrDetailComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_29__["AlertComponent"],
                _vm_page_vm_page_component__WEBPACK_IMPORTED_MODULE_30__["VmPageComponent"],
                _tm_page_tm_page_component__WEBPACK_IMPORTED_MODULE_31__["TmPageComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_32__["FileSelectDirective"],
                _tm_faq_detail_tm_faq_detail_component__WEBPACK_IMPORTED_MODULE_34__["TmFaqDetailComponent"],
                _vm_faq_detail_vm_faq_detail_component__WEBPACK_IMPORTED_MODULE_35__["VmFaqDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'my-app' }),
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_2__["CKEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BootstrapModalModule"].forRoot({ container: document.body })
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["PaladionService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], _guard_user__WEBPACK_IMPORTED_MODULE_28__["OnlyLoggedInUsersGuard"], _guard_admin__WEBPACK_IMPORTED_MODULE_27__["OnlyLoggedInAdminsGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _vm_faq_vm_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm-faq/vm-faq.component */ "./src/app/vm-faq/vm-faq.component.ts");
/* harmony import */ var _tm_faq_tm_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tm-faq/tm-faq.component */ "./src/app/tm-faq/tm-faq.component.ts");
/* harmony import */ var _vm_cat_vm_cat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vm-cat/vm-cat.component */ "./src/app/vm-cat/vm-cat.component.ts");
/* harmony import */ var _tm_cat_tm_cat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tm-cat/tm-cat.component */ "./src/app/tm-cat/tm-cat.component.ts");
/* harmony import */ var _tm_mdr_tm_mdr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tm-mdr/tm-mdr.component */ "./src/app/tm-mdr/tm-mdr.component.ts");
/* harmony import */ var _vm_mdr_vm_mdr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vm-mdr/vm-mdr.component */ "./src/app/vm-mdr/vm-mdr.component.ts");
/* harmony import */ var _tm_mdr_detail_tm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tm-mdr-detail/tm-mdr-detail.component */ "./src/app/tm-mdr-detail/tm-mdr-detail.component.ts");
/* harmony import */ var _vm_mdr_detail_vm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vm-mdr-detail/vm-mdr-detail.component */ "./src/app/vm-mdr-detail/vm-mdr-detail.component.ts");
/* harmony import */ var _guard_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard-user */ "./src/app/guard-user.ts");
/* harmony import */ var _guard_admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard-admin */ "./src/app/guard-admin.ts");
/* harmony import */ var _tm_page_tm_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tm-page/tm-page.component */ "./src/app/tm-page/tm-page.component.ts");
/* harmony import */ var _vm_page_vm_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vm-page/vm-page.component */ "./src/app/vm-page/vm-page.component.ts");
/* harmony import */ var _tm_faq_detail_tm_faq_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tm-faq-detail/tm-faq-detail.component */ "./src/app/tm-faq-detail/tm-faq-detail.component.ts");
/* harmony import */ var _vm_faq_detail_vm_faq_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vm-faq-detail/vm-faq-detail.component */ "./src/app/vm-faq-detail/vm-faq-detail.component.ts");

















var APP_ROUTES = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    // {
    //   path: 'faq',
    //   component: FaqComponent
    // },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        canActivate: [_guard_admin__WEBPACK_IMPORTED_MODULE_12__["OnlyLoggedInAdminsGuardService"]]
    },
    // {
    //   path: 'mdr',
    //   component: MdrComponent
    // },
    {
        path: 'vm/mdr/:id',
        component: _vm_mdr_vm_mdr_component__WEBPACK_IMPORTED_MODULE_8__["VmMdrComponent"],
        canActivate: [_guard_user__WEBPACK_IMPORTED_MODULE_11__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'tm/mdr/:id',
        component: _tm_mdr_tm_mdr_component__WEBPACK_IMPORTED_MODULE_7__["TmMdrComponent"],
        canActivate: [_guard_user__WEBPACK_IMPORTED_MODULE_11__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'vm/mdrdetail/:id',
        component: _vm_mdr_detail_vm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_10__["VmMdrDetailComponent"],
    },
    {
        path: 'tm/mdrdetail/:id',
        component: _tm_mdr_detail_tm_mdr_detail_component__WEBPACK_IMPORTED_MODULE_9__["TmMdrDetailComponent"],
    },
    // {
    //   path: 'mdr/:id',
    //   component: MdrDetailComponent,
    //   canActivate: [OnlyLoggedInUsersGuard] 
    // },
    {
        path: 'tm/faqdetails',
        component: _tm_faq_detail_tm_faq_detail_component__WEBPACK_IMPORTED_MODULE_15__["TmFaqDetailComponent"],
    },
    {
        path: 'vm/faqdetails',
        component: _vm_faq_detail_vm_faq_detail_component__WEBPACK_IMPORTED_MODULE_16__["VmFaqDetailComponent"],
    },
    {
        path: 'vm/faq',
        component: _vm_faq_vm_faq_component__WEBPACK_IMPORTED_MODULE_3__["VmFaqComponent"],
    },
    {
        path: 'tm/faq',
        component: _tm_faq_tm_faq_component__WEBPACK_IMPORTED_MODULE_4__["TmFaqComponent"],
    },
    {
        path: 'vm/cat',
        component: _vm_cat_vm_cat_component__WEBPACK_IMPORTED_MODULE_5__["VmCatComponent"],
        canActivate: [_guard_user__WEBPACK_IMPORTED_MODULE_11__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'tm/cat',
        component: _tm_cat_tm_cat_component__WEBPACK_IMPORTED_MODULE_6__["TmCatComponent"],
        canActivate: [_guard_user__WEBPACK_IMPORTED_MODULE_11__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'tm/page/:id',
        component: _tm_page_tm_page_component__WEBPACK_IMPORTED_MODULE_13__["TmPageComponent"],
    },
    {
        path: 'vm/page/:id',
        component: _vm_page_vm_page_component__WEBPACK_IMPORTED_MODULE_14__["VmPageComponent"],
    },
    {
        path: '**',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_guard_user__WEBPACK_IMPORTED_MODULE_11__["OnlyLoggedInUsersGuard"]]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: PaladionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaladionService", function() { return PaladionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaladionService = /** @class */ (function () {
    //BASEURL = 'http://40.117.79.37:3000/';
    //UIBASE = 'http://40.117.79.37:4200/';
    function PaladionService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.BASEURL = 'http://localhost:3000/';
        this.UIBASE = 'http://localhost:4200/';
    }
    PaladionService.prototype.getBaseUrl = function () {
        return this.BASEURL;
    };
    PaladionService.prototype.getUiBase = function () {
        return this.UIBASE;
    };
    PaladionService.prototype.getAllFaqs = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/faq", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getFaqByMdrTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/faq/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getAllFaqsBasedOnMdrId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/faq/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getAllCategories = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/category", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getCategoryByMdrTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/category/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getPageByMdrTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/page/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getIconByMdrTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/icon/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getAllTypes = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/type", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getTypeByMdrTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/type/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getAllTypesForAdmin = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/admin/type", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getAllMdrLogs = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/mdr", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getMdrByMdrTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/mdr/mdrtype/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getMdrByTypeId = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/mdr/type/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getMdrLogsById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/mdr/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.deleteFaq = function (data) {
        console.log('in Delete Faq Service!');
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/faq', { body: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.deleteIcon = function (data) {
        console.log('in Delete Faq Service!');
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/icon', { body: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.deleteCategory = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/category', { body: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.deleteType = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/type', { body: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.deleteMdrLogs = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/mdr', { body: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.deletePage = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/page', { body: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.updateFaq = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.BASEURL + 'api/faq', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.updateCategory = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.BASEURL + 'api/category', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.updateType = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.BASEURL + 'api/type', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.updateMdrLogs = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.BASEURL + 'api/mdr', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.updatePage = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.BASEURL + 'api/page', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.addFaq = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/faq', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.addCategory = function (data) {
        console.log('data: ' + JSON.stringify(data));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/category', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.addType = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/type', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.addMdrLogs = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/mdr', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.addPage = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/page', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getPageById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/page/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getIconById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/icon/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.getTypeById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.BASEURL + "api/type/" + id, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.login = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/user/auth', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.isAdmin = function () {
        var cookieValue = this.cookieService.get('palIdentify');
        if (cookieValue == '13f1f0d7-510c-448c-9e22-99d7dcd4e720') {
            return true;
        }
        else {
            return false;
        }
    };
    PaladionService.prototype.isUser = function () {
        var cookieValue = this.cookieService.get('palIdentify');
        if (cookieValue == 'f9fa2cdd8cacb7dfdff3bd0a721540476183' || cookieValue == '13f1f0d7-510c-448c-9e22-99d7dcd4e720') {
            return true;
        }
        else {
            return false;
        }
    };
    PaladionService.prototype.moveup = function (data) {
        console.log('data: ' + JSON.stringify(data));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/faq/moveup', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService.prototype.movedown = function (data) {
        console.log('data: ' + JSON.stringify(data));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.BASEURL + 'api/faq/movedown', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json() || []; }));
    };
    PaladionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], PaladionService);
    return PaladionService;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nbody {\n    background: lightgray;\n}\n\n.navbar-fixed-top {\n    top: 0;\n    border-width: 0 0 1px;\n}\n\n.navbar-default .navbar-nav #user-profile {\n    height: 50px;\n    padding-top: 15px;\n    padding-left: 58px;\n}\n\n.navbar-default .navbar-nav #user-profile img {\n    height: 45px;\n    width: 45px;\n    position: absolute;\n    top: 10px;\n    left: 8px;\n    padding: 1px;\n}\n\n#wrapper {\n    padding-top: 50px;\n    padding-left: 0;\n    transition: all .5s ease;\n}\n\n.img-responsive {\n    vertical-align : middle;\n    width: 35px !important;\n    height: 35px !important;\n}\n\n@media (min-width: 992px) {\n    #wrapper {\n        padding-left: 225px;\n    }\n}\n\n@media (min-width: 992px) {\n    #wrapper #sidebar-wrapper {\n        width: 225px;\n    }\n}\n\n#sidebar-wrapper {\n    border-right: 1px solid #e7e7e7;\n}\n\n#sidebar-wrapper {\n    z-index: 1000;\n    position: fixed;\n    left: 225px;\n    width: 0;\n    height: 100%;\n    margin-left: -225px;\n    overflow-y: auto;\n    background: #f8f8f8;\n    transition: all .5s ease;\n}\n\n#sidebar-wrapper .sidebar-nav {\n    position: absolute;\n    top: 0;\n    width: 225px;\n    font-size: 14px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n#sidebar-wrapper .sidebar-nav li {\n    text-indent: 0;\n    line-height: 45px;\n}\n\n#sidebar-wrapper .sidebar-nav li a {\n    display: block;\n    text-decoration: none;\n    /* color: #428bca; */\n}\n\n.sidebar-nav li:first-child a {\n    /* background: #92bce0 !important;\n    color: #fff !important; */\n}\n\n#sidebar-wrapper .sidebar-nav li a .sidebar-icon {\n    width: 45px;\n    height: 45px;\n    font-size: 14px;\n    padding: 0 2px;\n    display: inline-block;\n    text-indent: 7px;\n    margin-right: 10px;\n    color: #000000;\n    float: left;\n}\n\n#sidebar-wrapper .sidebar-nav li a .caret {\n  position: absolute;\n  right: 23px;\n  top: auto;\n  margin-top: 20px;\n}\n\n#sidebar-wrapper .sidebar-nav li ul.panel-collapse {\n    list-style: none;\n    -webkit-padding-start: 0;\n    -khtml-padding-start: 0;\n    -o-padding-start: 0;\n    padding-start: 0;\n    padding: 0;\n}\n\n#sidebar-wrapper .sidebar-nav li ul.panel-collapse li i {\n    margin-right: 10px;\n}\n\n#sidebar-wrapper .sidebar-nav li ul.panel-collapse li {\n    text-indent: 15px;\n}\n\n@media (max-width: 992px) {\n    #wrapper #sidebar-wrapper {\n        width: 45px;\n    }\n    #wrapper #sidebar-wrapper #sidebar #sidemenu li ul {\n        position: fixed;\n        left: 45px;\n        margin-top: -45px;\n        z-index: 1000;\n        width: 200px;\n        height: 0;\n    }\n}\n\n.sidebar-nav li:first-child a {\n    /* background: #92bce0 !important; */\n    color: #000000 !important;\n}\n\n.sidebar-nav li:nth-child(2) a {\n    /* background: #6aa3d5 !important; */\n    color: #000000 !important;\n}\n\n.sidebar-nav li:nth-child(3) a {\n    /* background: #428bca !important; */\n    color: #000000 !important;\n}\n\n.sidebar-nav li:nth-child(4) a {\n    /* background: #3071a9 !important; */\n    color: #000000 !important;\n}\n\n.sidebar-nav li:nth-child(5) a {\n    /* background: #245682 !important; */\n    color: #000000 !important;\n}\n\n.sidebar-nav li:nth-child(6) a {\n    /* background: #245682 !important; */\n    color: #000000 !important;\n}\n\n.sidebar-nav li:nth-child(7) a {\n    /* background: #245682 !important; */\n    color: #000000 !important;\n}\n\n.accordion {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n}\n\n.active, .accordion:hover {\n    background-color: #eee;\n}\n\n.accordion:after {\n    content: '\\002B';\n    color: #777;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n.active:after {\n    content: \"\\2212\";\n}\n\n.panel {\n    \n    background-color: #eee;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}\n\n"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main id=\"page-content-wrapper\" role=\"main\" style=\"margin: 15px\">\n    <div class=\"col-md-12 col-sm-12\">\n        <div class=\"col-md-12 col-sm-12\" >\n            <h4><span><i class=\"fas fa-info-circle\"></i></span><span>Frequently Asked Questions </span></h4>\n            <p>Find out everything you need to get started by taking a tour. If you still have questions, come back and check out the pinned articles.</p>\n\n            <div class=\"container col-md-12 col-sm-12\">\n                <div *ngFor=\"let faq of allFaqs\">\n                  <button class=\"accordion\" (click)=\"toggleMe($event)\" > <span innerHTML=\"{{faq.question}}\"></span> </button>\n                  <div class=\"panel\">\n                    <div style=\"padding: 14px;\n                    background: #fff;\" innerHTML=\"{{faq.answer}}\">\n\n                    </div>\n                  </div>\n                </div>\n            </div> \n          </div>\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = /** @class */ (function () {
    function FaqComponent(paladionService) {
        this.paladionService = paladionService;
        this.getAllFaqs();
    }
    FaqComponent.prototype.toggleMe = function (event) {
        event.path[0].classList.toggle("active");
        var panel = event.path[0].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    FaqComponent.prototype.getAllFaqs = function () {
        var _this = this;
        this.paladionService.getAllFaqs().subscribe(function (data) {
            // console.log('data: '+JSON.stringify(data.data));
            _this.allFaqs = data.data;
            console.log(_this.allFaqs);
        });
    };
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/guard-admin.ts":
/*!********************************!*\
  !*** ./src/app/guard-admin.ts ***!
  \********************************/
/*! exports provided: OnlyLoggedInAdminsGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedInAdminsGuardService", function() { return OnlyLoggedInAdminsGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnlyLoggedInAdminsGuardService = /** @class */ (function () {
    function OnlyLoggedInAdminsGuardService(paladionService, router) {
        this.paladionService = paladionService;
        this.router = router;
    }
    ;
    OnlyLoggedInAdminsGuardService.prototype.canActivate = function (route, state) {
        if (this.paladionService.isAdmin()) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    OnlyLoggedInAdminsGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OnlyLoggedInAdminsGuardService);
    return OnlyLoggedInAdminsGuardService;
}());



/***/ }),

/***/ "./src/app/guard-user.ts":
/*!*******************************!*\
  !*** ./src/app/guard-user.ts ***!
  \*******************************/
/*! exports provided: OnlyLoggedInUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedInUsersGuard", function() { return OnlyLoggedInUsersGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnlyLoggedInUsersGuard = /** @class */ (function () {
    function OnlyLoggedInUsersGuard(paladionService, router) {
        this.paladionService = paladionService;
        this.router = router;
    }
    ;
    OnlyLoggedInUsersGuard.prototype.canActivate = function (route, state) {
        if (this.paladionService.isUser()) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    OnlyLoggedInUsersGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OnlyLoggedInUsersGuard);
    return OnlyLoggedInUsersGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n.align {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n  }\n  \n  /* helpers/grid.css */\n  \n  .grid {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 24em;\n    width: 90%;\n  }\n  \n  /* helpers/icon.css */\n  \n  .icon {\n    display: inline-block;\n    height: 1.25em;\n    line-height: 1.25em;\n    margin-right: 0.625em;\n    text-align: center;\n    vertical-align: middle;\n    width: 1.25em;\n  }\n  \n  .icon--info {\n    background-color: #e5e5e5;\n    border-radius: 8px;\n  }\n  \n  /* layout/base.css */\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n  \n  /* modules/anchor.css */\n  \n  a {\n    color: inherit;\n    text-decoration: none;\n    transition: color 0.3s;\n  }\n  \n  a:hover {\n    color: #1dabb8;\n  }\n  \n  h3 {color:black;\n       text-align: center;}\n  \n  /* modules/form.css */\n  \n  label {color:lightgray;}\n  \n  fieldset {\n    border: none;\n    margin: 0;\n  }\n  \n  #login_h3 {text-align:center;\n            color:black}\n  \n  input {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: none;\n    font: inherit;\n    margin: 0;\n    outline: none;\n    padding: 0;\n  }\n  \n  input[type='submit'] {\n    cursor: pointer;\n  }\n  \n  .form input[type='email'],\n  .form input[type='password'] {\n    width: 100%;\n  }\n  \n  /* modules/login.css */\n  \n  .login__header {\n    background-color: #282830;\n    border-top-left-radius: 0.25em;\n    border-top-right-radius: 0.25em;\n    color: #fff;\n    padding: 1.5em;\n    text-align: center;\n    text-transform: uppercase;\n  }\n  \n  .login__title {\n    font-size: 100%;\n    font-size: 1rem;\n    margin: 0;\n  }\n  \n  .login__body {\n    background-color: #fff;\n    padding: 1.5em;\n    position: relative;\n      vertical-align: middle;\n  }\n  \n  .login__body::before {\n    background-color: #fff;\n    content: '';\n    height: 0.5em;\n    left: 50%;\n    margin-left: -0.25em;\n    margin-top: -0.25em;\n    position:fixed;\n    top: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    width: 0.5em;\n  }\n  \n  .login input[type='email'],\n  .login input[type='password'] {\n    border: 0.0625em solid #e5e5e5;\n    padding: 1em 1.25em;\n  }\n  \n  .login input[type='email'] {\n    border-top-left-radius: 0.25em;\n    border-top-right-radius: 0.25em;\n  }\n  \n  .login input[type='password'] {\n    border-bottom-left-radius: 0.25em;\n    border-bottom-right-radius: 0.25em;\n    border-top: 0;\n  }\n  \n  .login input[type='submit'] {\n    background-color: #1dabb8;\n    border-radius: 0.25em;\n    color: #fff;\n    font-weight: 700;\n    order: 1;\n    padding: 0.75em 1.25em;\n    transition: background-color 0.3s;\n  }\n  \n  .login input[type='submit']:focus,\n  .login input[type='submit']:hover {\n    background-color: #198d98;\n  }\n  \n  .login__footer {\n    align-items: center;\n    background-color: #fff;\n    border-bottom-left-radius: 0.25em;\n    border-bottom-right-radius: 0.25em;\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 1.5em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n  \n  .login__footer p {\n    margin: 0;\n  }\n  \n  /* Full-width input fields */\n  \n  input[type=text], input[type=password] {\n      width: 95%;\n      padding: 12px 20px;\n      margin: 0px 10px 8px;\n      display: inline-block;\n      border: 1px solid #ccc;\n      box-sizing: border-box;\n      border-radius:5px;\n  }\n  \n  /* Set a style for all buttons */\n  \n  button {\n      background-color: #4CAF50;\n      color: white;\n      padding: 14px 20px;\n      margin: 8px 0;\n      border: none;\n      cursor: pointer;\n      width: 100%;\n      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);\n      border-radius:5px\n  }\n  \n  .form_btns { }\n  \n  .form_btns button {\n   min-width: 100%;\n   margin-bottom: 20px;\n  }\n  \n  button.red, .form_btns button.red {\n      color:#FFFFFF;\n      background-color:#ce1414;\n  }\n  \n  button:hover {\n      background-color: #404040;\n  }\n  \n  /* Extra styles for the cancel button */\n  \n  .cancelbtn {\n      width: auto;\n      padding: 10px 18px;\n      background-color: #f44336;\n  }\n  \n  /* Center the image and position the close button */\n  \n  .imgcontainer {\n      text-align: center;\n      margin:35px 0 23px 0;\n      position: relative;\n      vertical-align: middle;\n  }\n  \n  .login-container {\n      display: flex;\n      min-height: 100vh;\n      background-color: #eff3f6;\n      align-items: center;\n  }\n  \n  .login-container label{\n      margin-left: 10px;\n      margin-top: 10px;\n      margin-bottom:0px;\n      color:#414141;\n  }\n  \n  .login-container input{\n      background-color:#f8fafc;\n  }\n  \n  .login-container button{\n      margin: 8px 10px 8px;\n      width: 95%;\n  }\n  \n  .login-body{\n      background-color:#eff3f6;\n      margin: 0 auto;\n  }\n  \n  .login-btn{\n      margin: 20px 10px 8px !important;\n      width: 95%;\n  }\n  \n  span.psw {\n      float: right;\n      padding-top: 5px;\n  }\n  \n  /* The Modal (background) */\n  \n  .modal {\n      display: none; /* Hidden by default */\n      position:relative; /* Stay in place */\n      z-index: 1; /* Sit on top */\n      left: 0;\n      top: 0;\n      width: 100%; /* Full width */\n      height: 100%; /* Full height */\n      overflow: auto; /* Enable scroll if needed */\n      background-color: rgb(0,0,0); /* Fallback color */\n      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n      padding-top: 60px;\n  }\n  \n  /* Modal Content/Box */\n  \n  .modal-content {\n      background-color: #fefefe;\n      margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n      border: 1px solid #888;\n      width: 30%; /* Could be more or less, depending on screen size */\n  }\n  \n  /* The Close Button (x) */\n  \n  .close {\n      position: absolute;\n      right: 25px;\n      top: 0;\n      color: #000;\n      font-size: 35px;\n      font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n      color: red;\n      cursor: pointer;\n  }\n  \n  .cent\n  {\n      height:50px;\n      width:50px;\n      background-color:black;\n  }\n  \n  .modalContent{\n      background-color: #fff;\n      background-clip: padding-box;\n      border: 1px solid #999;\n      border: 1px solid rgba(0,0,0,.2);\n      border-radius: 6px;\n      outline: 0;\n      box-shadow: 0 3px 9px rgba(0,0,0,.5);\n  \n      filter:progid:DXImageTransform.Microsoft.dropshadow(\n              OffX=3px, OffY=9px, Color='black', Positive='false'\n      ); /* IE 5.5 */\n      padding: 10%;\n  }\n  \n  .g-color-white{\n      background-color:#f8fafc;\n  }\n  \n  .g-mb-20{\n      margin-bottom:20px!important;\n  }\n  \n  .g-color-lightblue{\n      color:#124968;\n  }\n  \n  /*draft css*/\n  \n  .btn-primary{\n      background: #cd2027 !important;\n      background-color:#cd2027 !important ;\n      border-color: #cd2027 !important;\n  }\n  \n  .btn-primary:hover{\n      background: #cd2027cf !important;\n      background-color:#cd2027cf !important ;\n      border-color: #cd2027cf !important;\n  }\n  \n  .paginate_button{\n      padding:0px !important;\n      padding-left:2px !important;\n      padding-right:2px !important;\n  \n  }\n  \n  .jconfirm .jconfirm-box .jconfirm-buttons button.btn-red:hover {\n      background-color: #e6161e !important;\n  }\n  \n  .jconfirm .jconfirm-box .jconfirm-buttons button.btn-red {\n      background-color: #cd2027 !important;\n  }\n  \n  .userInfo td {\n      min-width: 6px !important;\n      border: none !important;\n  }\n  \n  .userInfo th {\n      min-width: 6px !important;\n      border: none !important;\n  }\n  \n  .userInfo div{\n      padding-top: 7px !important;\n  }\n  \n  .userTable th{\n      vertical-align: middle !important;\n      word-wrap: break-word !important;\n      white-space: pre-wrap !important;\n      padding: 0px !important;\n  }\n  \n  .dashboard_infobox .infobox p{\n      margin-top: 5px !important;\n      margin-bottom: 5px !important;\n  }\n  \n  .table-bordered {\n      border: 2px dotted #6c6b6b;\n  }\n  \n  .table-bordered>thead>tr>th,\n  .table-bordered>tbody>tr>th,\n  .table-bordered>tfoot>tr>th,\n  .table-bordered>thead>tr>td,\n  .table-bordered>tbody>tr>td,\n  .table-bordered>tfoot>tr>td {\n      border: 2px dotted #6c6b6b;\n  }\n  \n  /**********/\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-body\">\n  <div class=\"container login-container\">\n      <div class=\"col-sm-2 col-md-4\"></div>\n      <div class=\"col-sm-8 col-md-4\">\n          <div class=\"modalContent\"  >\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <div style=\"text-align: center\">\n                      <img src=\"assets/images/paladion.png\" alt=\"Paladion\" class=\"logo g-mb-20\">\n                  </div>\n                  <div id=\"error1\" class=\"text-center\"></div>\n                  <div class=\"\">\n                      <label > Username </label>\n                      <input type=\"text\" placeholder=\"Username\" formControlName=\"username\">\n                      <label>Password</label>\n                      <input type=\"password\" formControlName=\"password\"placeholder=\"Password\">\n                     <!-- <button class=\"login-btn red\" type=\"submit\">Sign in to Propal</button>-->\n\n                     <button class=\"login-btn red\" type=\"submit\">Sign in </button>\n\n                     <!--<div *ngIf=\"loading\" class=\"alert alert-danger\">Invalid Username or Password</div>-->\n                     <!---<div *ngIf=\"pageloggedin\" class=\"alert alert-danger\">Invalid Username or Password</div>-->\n                     <div [hidden]=\"!loading\"  *ngIf=\"loading\" class=\"alert alert-danger\">Invalid Username or Password</div>\n                     \n                  </div>\n                  <!-- <span class=\"psw\"><a id=\"forgotPassHref\" [routerLink]=\"'/passwordreset'\" class=\"g-color-lightblue\">Forgot password?</a></span> -->\n              </form>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, paladionService, cookieService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.paladionService = paladionService;
        this.cookieService = cookieService;
        this.loading = false;
        this.pageloggedin = false;
        this.submitted = false;
        this.error = '';
        this.cookieValue = 'UNKNOWN';
        this.showErrormsg = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.expiredDate = new Date();
        this.expiredDate.setDate(this.expiredDate.getDate() + 1);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
            //return throwError({ error: { message: 'Username or password is incorrect' } });
        }
        var data = {
            username: this.f.username.value,
            password: this.f.password.value
        };
        //this.loading = true;
        this.pageloggedin = true;
        this.paladionService.login(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'SUCCESS') {
                _this.cookieService.set('palIdentify', data.type, _this.expiredDate);
                if (data.type == '13f1f0d7-510c-448c-9e22-99d7dcd4e720') {
                    _this.router.navigate(['/admin']);
                    return false;
                }
                if (data.type == 'f9fa2cdd8cacb7dfdff3bd0a721540476183') {
                    _this.router.navigate(['/tm/cat']);
                    return false;
                    ;
                }
                //this.pageloggedin=true; 
            }
            _this.loading = true;
            /*else{
              return this.pageloggedin=false;
              //return throwError({ error: { message: 'Username or password is incorrect' } });
             
            }*/
            // this.router.navigate([this.returnUrl]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_5__["PaladionService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mdr-detail/mdr-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mdr-detail/mdr-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdr-footer{\n    min-height: 48px;\n    background: #eee;\n    padding: 15px;\n}\n.vote{\n    min-width: 46px;\n    text-align: center;\n    margin-top: 20px;\n}\n/* .vote-up{\n    background-image: url(\"vote-up.png\");\n    background-size: initial;\n    background-repeat: no-repeat;\n    overflow: hidden;\n}\n.vote-down{\n    background-image: url(\"vote-down.png\");\n    background-size: initial;\n    background-repeat: no-repeat;\n    overflow: hidden;\n} */"

/***/ }),

/***/ "./src/app/mdr-detail/mdr-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/mdr-detail/mdr-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\">\n \n        <div class=\"\" style=\"float:left;padding: 5px 15px 0px 0px;\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/face.jpg\" width=\"42\" height=\"42\" class=\"img-circle\">\n            </div>\n            <div class=\"vote\"> \n                <img src=\"assets/images/vote-up.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                <p itemprop=\"upvoteCount\" class=\"vote-count-post\" style=\"margin: 0px;\">9</p>\n                <img src=\"assets/images/vote-down.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n            </div> \n        </div>\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n            \n            <p style=\"margin-bottom: 5px;\"> Updated: March 22, 2018 </p>\n            <h2 style=\"margin-top:0px;\"> {{mdr.title}} </h2>\n            <div innerHTML=\"{{mdr.long_desc}}\"></div>\n        </div>\n\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mdr-detail/mdr-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mdr-detail/mdr-detail.component.ts ***!
  \****************************************************/
/*! exports provided: MdrDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdrDetailComponent", function() { return MdrDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdrDetailComponent = /** @class */ (function () {
    function MdrDetailComponent(paladionService, route) {
        var _this = this;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.mdrId = params.id; });
    }
    MdrDetailComponent.prototype.ngOnInit = function () {
        this.getMDRLogs();
    };
    MdrDetailComponent.prototype.getMDRLogs = function () {
        var _this = this;
        this.paladionService.getMdrLogsById(this.mdrId).subscribe(function (data) {
            _this.mdr = data.data;
        });
    };
    MdrDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mdr-detail',
            template: __webpack_require__(/*! ./mdr-detail.component.html */ "./src/app/mdr-detail/mdr-detail.component.html"),
            styles: [__webpack_require__(/*! ./mdr-detail.component.css */ "./src/app/mdr-detail/mdr-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MdrDetailComponent);
    return MdrDetailComponent;
}());



/***/ }),

/***/ "./src/app/mdr/mdr.component.css":
/*!***************************************!*\
  !*** ./src/app/mdr/mdr.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdr-footer{\n    min-height: 48px;\n    background: #eee;\n    padding: 15px;\n}\n.vote{\n    min-width: 46px;\n    text-align: center;\n    margin-top: 20px;\n}\n/* .vote-up{\n    background-image: url(\"vote-up.png\");\n    background-size: initial;\n    background-repeat: no-repeat;\n    overflow: hidden;\n}\n.vote-down{\n    background-image: url(\"vote-down.png\");\n    background-size: initial;\n    background-repeat: no-repeat;\n    overflow: hidden;\n} */"

/***/ }),

/***/ "./src/app/mdr/mdr.component.html":
/*!****************************************!*\
  !*** ./src/app/mdr/mdr.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let mdr of allMdrs\">\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\n    border-bottom: 1px solid green;\">\n \n        <div class=\"\" style=\"float:left;padding: 5px 15px 0px 0px;\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/face.jpg\" width=\"42\" height=\"42\" class=\"img-circle\">\n            </div>\n            <div class=\"vote\"> \n                <img src=\"assets/images/vote-up.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                <p itemprop=\"upvoteCount\" class=\"vote-count-post\" style=\"margin: 0px;\">9</p>\n                <img src=\"assets/images/vote-down.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n            </div> \n        </div>\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n            \n           <!--<p style=\"margin-bottom: 5px;\"> Updated: March 22, 2018 </p>-->\n            <h2 style=\"margin-top:0px;\"> {{mdr.title}} </h2>\n            <p>  {{mdr.short_desc}} </p>\n            <div class=\"mdr-footer\">              \n                <span style=\"background: white;padding: 7px;\"> \n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 412 views \n                </span>              \n                <span [routerLink]=\"['/mdr', mdr.id]\"\n                  class=\"float-right\" style=\"float:right  ;  background: black;\n                        float: right;\n                        color: white;\n                        padding: 3px;\n                        font-size: 14px;cursor: pointer;\">\n                 More... \n                </span>             \n            </div>\n\n        </div>\n\n        \n\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mdr/mdr.component.ts":
/*!**************************************!*\
  !*** ./src/app/mdr/mdr.component.ts ***!
  \**************************************/
/*! exports provided: MdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdrComponent", function() { return MdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdrComponent = /** @class */ (function () {
    function MdrComponent(paladionService) {
        this.paladionService = paladionService;
        this.getAllMdrLogs();
    }
    MdrComponent.prototype.ngOnInit = function () {
    };
    MdrComponent.prototype.getAllMdrLogs = function () {
        var _this = this;
        this.paladionService.getAllMdrLogs().subscribe(function (data) {
            _this.allMdrs = data.data;
            console.log(_this.allMdrs);
        });
    };
    MdrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mdr',
            template: __webpack_require__(/*! ./mdr.component.html */ "./src/app/mdr/mdr.component.html"),
            styles: [__webpack_require__(/*! ./mdr.component.css */ "./src/app/mdr/mdr.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"]])
    ], MdrComponent);
    return MdrComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\">\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n            <div><p innerHTML=\"{{page.content}}\"></p></div> \n        </div>\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = /** @class */ (function () {
    function PageComponent(paladionService, route) {
        var _this = this;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.pageId = params.id; });
    }
    PageComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    PageComponent.prototype.getPage = function () {
        var _this = this;
        this.paladionService.getPageById(this.pageId).subscribe(function (data) {
            _this.page = data.data;
        });
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/tm-cat/tm-cat.component.css":
/*!*********************************************!*\
  !*** ./src/app/tm-cat/tm-cat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-container{\r\n    padding: 1rem;\r\n    margin: 1rem -15px 0;\r\n    border: 1px solid #eee;\r\n}\r\n.col-md-4{\r\n    padding: 5px;\r\n}\r\n.image{\r\n    padding: 1rem;\r\n    max-height: 13rem;\r\n    width: 80%;\r\n    border-radius: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tm-cat/tm-cat.component.html":
/*!**********************************************!*\
  !*** ./src/app/tm-cat/tm-cat.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-1\"></div>\n\n    <div class=\"col-md-10\">\n        <div class=\"row\" style=\"margin-top:2%\"> \n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item active\" aria-current=\"page\"> Device Types  & Categories </li>\n                </ol>\n              </nav>\n          </div>            \n          <div class=\"row img-container\" *ngFor=\"let cat of allCat\">\n            <h2 style=\"padding-left: 2rem; padding-bottom: 1rem;font-weight: 600\">  {{cat.category_name}}   </h2>\n            <div class=\"col-sm-3 col-sm-12 col-xs-12\" *ngFor=\"let type of cat.Types\">\n                <a  [routerLink]=\"['/tm/mdr/', type.id]\"> <img src=\"{{type.type_image}}\" class=\"image\"> </a>\n            </div>\n          </div>\n    </div>\n\n    <div class=\"col-md-1\"></div>\n  </div>\n  \n</div> \n\n\n"

/***/ }),

/***/ "./src/app/tm-cat/tm-cat.component.ts":
/*!********************************************!*\
  !*** ./src/app/tm-cat/tm-cat.component.ts ***!
  \********************************************/
/*! exports provided: TmCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmCatComponent", function() { return TmCatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmCatComponent = /** @class */ (function () {
    function TmCatComponent(paladionService, router) {
        this.paladionService = paladionService;
        this.router = router;
        this.getAllCat();
    }
    TmCatComponent.prototype.getAllCat = function () {
        var _this = this;
        this.paladionService.getCategoryByMdrTypeId('1').subscribe(function (data) {
            _this.allCat = data.data;
        });
    };
    TmCatComponent.prototype.navigateToMdr = function (id) {
        this.router.navigateByUrl('/tm/mdr/' + id);
    };
    TmCatComponent.prototype.ngOnInit = function () {
    };
    TmCatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tm-cat',
            template: __webpack_require__(/*! ./tm-cat.component.html */ "./src/app/tm-cat/tm-cat.component.html"),
            styles: [__webpack_require__(/*! ./tm-cat.component.css */ "./src/app/tm-cat/tm-cat.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TmCatComponent);
    return TmCatComponent;
}());



/***/ }),

/***/ "./src/app/tm-faq-detail/tm-faq-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tm-faq-detail/tm-faq-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-half {\r\n    \r\n    -ms-grid-column: 32;\r\n    \r\n    grid-column: 32;\r\n  }\r\n\r\n  .greyBtn{\r\n    background: #404040;\r\n    color: #ffffff;\r\n}"

/***/ }),

/***/ "./src/app/tm-faq-detail/tm-faq-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/tm-faq-detail/tm-faq-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div id=\"faqPage\" class=\"tab-pane fade in active\">\n        <!-- <h3>FAQs</h3> -->\n        <table class=\"table table-condensed table-hover\">\n           <tr>\n              <td><strong>Question</strong></td>\n              <td><strong>Answer</strong></td>\n              <td>\n                  <div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n                 <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n                 </div>\n                </td>\n           </tr>\n           <tr *ngFor=\"let item of allFaqs;\">\n              <td>{{item.question}}</td>\n              <td>               \n                  <div [innerHTML]=\"trustHTML(item.answer)\"> </div> \n              </td>\n              \n           </tr>\n        </table>\n\n\n        <!--<div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n          <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n      </div>-->\n\n     </div>\n     </div>\n\n"

/***/ }),

/***/ "./src/app/tm-faq-detail/tm-faq-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tm-faq-detail/tm-faq-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: TmFaqDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmFaqDetailComponent", function() { return TmFaqDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmFaqDetailComponent = /** @class */ (function () {
    function TmFaqDetailComponent(sanitizer, paladionService) {
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        this.mdrId = 1;
    }
    TmFaqDetailComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    TmFaqDetailComponent.prototype.getFaqByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getFaqByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allFaqs = data.data;
        });
    };
    TmFaqDetailComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.paladionService.isAdmin();
        if (this.mdrId) {
            this.getFaqByMdrTypeId();
        }
    };
    TmFaqDetailComponent.prototype.copyUrl = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = window.location.href;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        /* Alert the copied text */
        console.log(selBox.value);
    };
    TmFaqDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tm-faq-detail',
            template: __webpack_require__(/*! ./tm-faq-detail.component.html */ "./src/app/tm-faq-detail/tm-faq-detail.component.html"),
            styles: [__webpack_require__(/*! ./tm-faq-detail.component.css */ "./src/app/tm-faq-detail/tm-faq-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_2__["PaladionService"]])
    ], TmFaqDetailComponent);
    return TmFaqDetailComponent;
}());



/***/ }),

/***/ "./src/app/tm-faq/tm-faq.component.css":
/*!*********************************************!*\
  !*** ./src/app/tm-faq/tm-faq.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-half {\r\n    \r\n    -ms-grid-column: 32;\r\n    \r\n    grid-column: 32;\r\n  }\r\n\r\n.greyBtn{\r\n    background: #404040;\r\n    color: #ffffff;\r\n}\r\n\r\n/* .accordion {\r\n    background-color: #eee;\r\n    color: #444;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.active, .accordion:hover {\r\n    background-color: #eee;\r\n}\r\n\r\n.accordion:after {\r\n    content: '\\002B';\r\n    color: #777;\r\n    font-weight: bold;\r\n    float: left;\r\n    margin-left: 5px;\r\n}\r\n\r\n.active:after {\r\n    content: \"\\2212\";\r\n}\r\n\r\n.panel {\r\n    \r\n    background-color: #eee;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: max-height 0.2s ease-out;\r\n} */\r\n\r\n.panel-heading{\r\n    padding: 1.7rem;\r\n}\r\n\r\n.panel-title > a {\r\n    font-size: 20px;\r\n}\r\n\r\n.panel-body > span{\r\n    font-size: 18px;\r\n}\r\n\r\n.panel {\r\n    margin: 18px 0px 18px 0px;\r\n}\r\n\r\n.panel-title > a:before {\r\n    float: left !important;\r\n    font-family: FontAwesome;\r\n    content:\"\\f068\";\r\n    padding-right: 5px;\r\n}\r\n\r\n.panel-title > a.collapsed:before {\r\n    float: left !important;\r\n    content:\"\\f067\";\r\n}\r\n\r\n.panel-title > a:hover, \r\n.panel-title > a:active, \r\n.panel-title > a:focus  {\r\n    text-decoration:none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/tm-faq/tm-faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/tm-faq/tm-faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-1\"></div>\n\n<div class=\"container-fluid col-md-10 col-sm-10\">\n    <h2>FAQs</h2>\n    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"panel panel-default\" *ngFor=\"let faq of allFaqs\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"heading{{faq.id}}\">\n                 <h3 class=\"panel-title\">\n          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{faq.id}}\" aria-expanded=\"false\">\n              {{faq.question}}\n            </a>\n            \n          </h3>\n    \n            </div>\n            <div id=\"{{faq.id}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" >\n                <div class=\"panel-body\"> <span [innerHTML]=trustHTML(faq.answer)>   </span></div>\n            </div>\n        </div> \n    </div>\n</div>\n\n\n<!--<div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n        <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n    </div>-->\n    <div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n    <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n</div>\n\n\n\n\n\n<div class=\"col-md-1\">\n         \n</div>\n"

/***/ }),

/***/ "./src/app/tm-faq/tm-faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/tm-faq/tm-faq.component.ts ***!
  \********************************************/
/*! exports provided: TmFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmFaqComponent", function() { return TmFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmFaqComponent = /** @class */ (function () {
    function TmFaqComponent(sanitizer, paladionService) {
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        //this.getAllFaqs();
    }
    TmFaqComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    TmFaqComponent.prototype.toggleMe = function (event) {
        event.path[0].classList.toggle("active");
        var panel = event.path[0].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    TmFaqComponent.prototype.getAllFaqs = function () {
        var _this = this;
        this.paladionService.getAllFaqsBasedOnMdrId('1').subscribe(function (data) {
            _this.allFaqs = data.data;
            console.log(_this.allFaqs);
        });
    };
    TmFaqComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.paladionService.isAdmin();
        this.getAllFaqs();
    };
    TmFaqComponent.prototype.copyUrl = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = window.location.href;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        /* Alert the copied text */
        console.log(selBox.value);
    };
    TmFaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tm-faq',
            template: __webpack_require__(/*! ./tm-faq.component.html */ "./src/app/tm-faq/tm-faq.component.html"),
            styles: [__webpack_require__(/*! ./tm-faq.component.css */ "./src/app/tm-faq/tm-faq.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"]])
    ], TmFaqComponent);
    return TmFaqComponent;
}());



/***/ }),

/***/ "./src/app/tm-mdr-detail/tm-mdr-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tm-mdr-detail/tm-mdr-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arr-right .breadcrumb-item+.breadcrumb-item::before {\r\n    content: \">\";\r\n    vertical-align:middle;\r\n    color: #408080;\r\n    font-size:18px;\r\n    line-height:16px; \r\n}\r\n\r\n.mdr-footer{\r\n    min-height: 48px;\r\n    background: #eee;\r\n    padding: 15px;\r\n}\r\n\r\n.vote{\r\n    min-width: 46px;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.left-half {\r\n     \r\n    -ms-grid-column: 1;\r\n     \r\n    grid-column: 1;\r\n  }\r\n\r\n.right-half {\r\n    \r\n    -ms-grid-column: 32;\r\n    \r\n    grid-column: 32;\r\n  }\r\n\r\n.greyBtn{\r\n    background: #404040;\r\n    color: #ffffff;\r\n}\r\n\r\n.tooltip {\r\n      \r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 140px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 150%;\r\n    left: 50%;\r\n    margin-left: -75px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/tm-mdr-detail/tm-mdr-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/tm-mdr-detail/tm-mdr-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n        <div class=\"row\" style=\"margin-top:2%\">\n                <div class=\"col-md-1\"> </div>\n\n                <div class=\"col-md-10\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n                <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb arr-right\">\n                                <li class=\"breadcrumb-item\"><a href=\"tm/cat\">  Device Types  & Categories </a></li>\n                                <li class=\"breadcrumb-item\"><a href=\"tm/mdr/{{mdr.type_id}}\"> Versions  </a></li>\n                                <li class=\"breadcrumb-item active\" aria-current=\"page\"> Log Forwarding Steps </li>\n                        </ol>\n                      </nav>\n                </div>\n                      <div class=\"col-md-1\"></div>\n\n        </div>\n\n    <div class=\"row\">\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-10\" style=\"display: flex;margin-bottom: 25px;\">\n        <div class=\"\" style=\"float:left;padding: 5px 15px 0px 0px;\">\n            <div class=\"text-center\">\n             <img src=\"{{imgurl}}\" width=\"120\" height=\"120\" class=\"img-circle\">\n\n              <!--<img  src=\"{{imgurl}}\" width=\"120\" height=\"120\" class=\"img-rounded\">-->\n            </div>\n            <!-- <div class=\"vote\"> \n                <img src=\"assets/images/vote-up.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                <p itemprop=\"upvoteCount\" class=\"vote-count-post\" style=\"margin: 0px;\">9</p>\n            </div>  -->\n            <img src=\"assets/images/vote-down.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n        </div>\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n            \n            <div class=\"grid\" style=\"display:grid;align-items: baseline;\">\n                \n                <!--<div class=\"left-half \">\n                    <p style=\"margin-bottom: 5px;\"> Updated: March 22, 2018 </p>\n                </div>-->\n\n                <div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n                    <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n                </div>\n\n            </div>\n            \n                <h2 style=\"margin-top:0px;color:#c1272b;font-size:30px;\"> {{mdr.title}} </h2>\n\n            <div [innerHTML]=\"trustHTML(mdr.long_desc)\" style=\"color:404040;font-size: 21px;\"></div>\n        </div>\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tm-mdr-detail/tm-mdr-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tm-mdr-detail/tm-mdr-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: TmMdrDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmMdrDetailComponent", function() { return TmMdrDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TmMdrDetailComponent = /** @class */ (function () {
    function TmMdrDetailComponent(sanitizer, paladionService, route) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.mdrId = params.id; });
    }
    TmMdrDetailComponent.prototype.ngOnInit = function () {
        this.getMDRLogs();
        this.isAdmin = this.paladionService.isAdmin();
    };
    TmMdrDetailComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    TmMdrDetailComponent.prototype.getMDRLogs = function () {
        var _this = this;
        this.paladionService.getMdrLogsById(this.mdrId).subscribe(function (data) {
            _this.mdr = data.data;
            if (_this.mdr) {
                _this.paladionService.getTypeById(_this.mdr.type_id).subscribe(function (data) {
                    _this.imgurl = data.data.type_image;
                });
            }
        });
    };
    TmMdrDetailComponent.prototype.copyUrl = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = window.location.href;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        /* Alert the copied text */
        console.log(selBox.value);
    };
    TmMdrDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tm-mdr-detail',
            template: __webpack_require__(/*! ./tm-mdr-detail.component.html */ "./src/app/tm-mdr-detail/tm-mdr-detail.component.html"),
            styles: [__webpack_require__(/*! ./tm-mdr-detail.component.css */ "./src/app/tm-mdr-detail/tm-mdr-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TmMdrDetailComponent);
    return TmMdrDetailComponent;
}());



/***/ }),

/***/ "./src/app/tm-mdr/tm-mdr.component.css":
/*!*********************************************!*\
  !*** ./src/app/tm-mdr/tm-mdr.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdr-footer{\r\n    min-height: 48px;\r\n    background: #eee;\r\n    padding: 15px;\r\n}\r\n.vote{\r\n    min-width: 46px;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n.arr-right .breadcrumb-item+.breadcrumb-item::before {\r\n  content: \">\";\r\n  vertical-align:middle;\r\n  color: #408080;\r\n  font-size:18px;\r\n  line-height:16px; \r\n}\r\n"

/***/ }),

/***/ "./src/app/tm-mdr/tm-mdr.component.html":
/*!**********************************************!*\
  !*** ./src/app/tm-mdr/tm-mdr.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <div class=\"row\" style=\"margin-top:2%\"> \n            <div class=\"col-md-1\"></div>\n                <div class=\"col-md-10\">\n                 <nav aria-label=\"breadcrumb \">\n                        <ol class=\"breadcrumb arr-right\">\n                          <li class=\"breadcrumb-item\"><a href=\"tm/cat\"> Device Types & Categories </a></li>\n                          <li class=\"breadcrumb-item active\" aria-current=\"page\"> Versions </li>\n                        </ol>\n                  </nav>  \n                </div> \n            <div class=\"col-md-1\"></div>\n         </div>\n\n        <div class=\"row\" *ngFor=\"let mdr of allMdrs\">\n           <div class=\"col-md-1\">\n           </div>\n           <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\n              border-bottom: 1px dashed #d3222d;\">\n              <div class=\"\" style=\"float:left;padding: 5px 15px 0px 0px;\">\n                 <div class=\"text-center\">\n                <!--<img  src=\"{{imgurl}}\" width=\"120\" height=\"120\" class=\"img-circle\">-->\n\n                <img  src=\"{{imgurl}}\" width=\"120\" height=\"120\" class=\"img-rounded\">\n                  \n                 </div>\n                 <!-- <div class=\"vote\">\n                    <img src=\"assets/images/vote-up.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                    <p itemprop=\"upvoteCount\" class=\"vote-count-post\" style=\"margin: 0px;\">9</p>\n                    <img src=\"assets/images/vote-down.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                 </div> -->\n              </div>\n              <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n                 <!--<p style=\"margin-bottom: 5px;\"> Updated: March 22, 2018 </p>-->\n                 <h2 style=\"margin-top:0px;color:#c1272b;font-size:30px;\"> {{mdr.title}} </h2>\n                 <p style=\"color:404040;font-size: 21px;\">  {{mdr.short_desc}} </p>\n                 <div class=\"mdr-footer\">              \n                    <span style=\"background: white;padding: 7px;\"> \n                    <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{mdr.view}} views \n                    </span>              \n                    <span [routerLink]=\"['/tm/mdrdetail/', mdr.id]\"\n                       class=\"float-right\" style=\"float:right  ;  background: black;\n                       float: right;\n                       color: white;\n                       padding: 3px;\n                       font-size: 14px;cursor: pointer;\">\n                    More... \n                    </span>             \n                 </div>\n              </div>\n           </div>\n           <div class=\"col-md-1\">\n           </div>\n        </div>\n     </div>"

/***/ }),

/***/ "./src/app/tm-mdr/tm-mdr.component.ts":
/*!********************************************!*\
  !*** ./src/app/tm-mdr/tm-mdr.component.ts ***!
  \********************************************/
/*! exports provided: TmMdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmMdrComponent", function() { return TmMdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmMdrComponent = /** @class */ (function () {
    function TmMdrComponent(paladionService, route) {
        var _this = this;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.typeId = params.id; });
    }
    TmMdrComponent.prototype.ngOnInit = function () {
        this.getTypeImage();
        this.getAllMdrLogs();
    };
    TmMdrComponent.prototype.getTypeImage = function () {
        var _this = this;
        this.paladionService.getTypeById(this.typeId).subscribe(function (data) {
            _this.imgurl = data.data.type_image;
        });
    };
    TmMdrComponent.prototype.getAllMdrLogs = function () {
        var _this = this;
        this.paladionService.getMdrByTypeId(this.typeId).subscribe(function (data) {
            _this.allMdrs = data.data;
            console.log(_this.allMdrs);
        });
    };
    TmMdrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tm-mdr',
            template: __webpack_require__(/*! ./tm-mdr.component.html */ "./src/app/tm-mdr/tm-mdr.component.html"),
            styles: [__webpack_require__(/*! ./tm-mdr.component.css */ "./src/app/tm-mdr/tm-mdr.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TmMdrComponent);
    return TmMdrComponent;
}());



/***/ }),

/***/ "./src/app/tm-page/tm-page.component.css":
/*!***********************************************!*\
  !*** ./src/app/tm-page/tm-page.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-half {\r\n    \r\n    -ms-grid-column: 32;\r\n    \r\n    grid-column: 32;\r\n  }\r\n\r\n  .greyBtn{\r\n    background: #404040;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tm-page/tm-page.component.html":
/*!************************************************!*\
  !*** ./src/app/tm-page/tm-page.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n    <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\">\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n          \n                <div  style=\"float: right\" class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n                        <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n                      \n                      </div>\n          \n         <!--<div><p innerHTML=\"{{page.content}}\"></p></div>-->\n        <div [innerHTML]=\"trustHTML(page.content)\" style=\"color:404040;font-size: 21px;\"></div>\n                \n          <!--<div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n              <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n            \n            </div>-->\n            \n\n           \n        </div>\n\n        \n    </div>\n  \n  \n\n"

/***/ }),

/***/ "./src/app/tm-page/tm-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tm-page/tm-page.component.ts ***!
  \**********************************************/
/*! exports provided: TmPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmPageComponent", function() { return TmPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TmPageComponent = /** @class */ (function () {
    function TmPageComponent(sanitizer, paladionService, route) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.pageId = params.id; });
    }
    TmPageComponent.prototype.ngOnInit = function () {
        this.getPage();
        this.isAdmin = this.paladionService.isAdmin();
    };
    TmPageComponent.prototype.getPage = function () {
        var _this = this;
        this.paladionService.getPageById(this.pageId).subscribe(function (data) {
            _this.page = data.data;
        });
    };
    TmPageComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    TmPageComponent.prototype.copyUrl = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = window.location.href;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        /* Alert the copied text */
        console.log(selBox.value);
    };
    TmPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tm-page',
            template: __webpack_require__(/*! ./tm-page.component.html */ "./src/app/tm-page/tm-page.component.html"),
            styles: [__webpack_require__(/*! ./tm-page.component.css */ "./src/app/tm-page/tm-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TmPageComponent);
    return TmPageComponent;
}());



/***/ }),

/***/ "./src/app/vm-cat/vm-cat.component.css":
/*!*********************************************!*\
  !*** ./src/app/vm-cat/vm-cat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-container{\r\n    padding: 1rem;\r\n    margin: 1rem -15px 0;\r\n    border: 1px solid #eee;\r\n}\r\n.col-md-4{\r\n    padding: 5px;\r\n}\r\n.image{\r\n    padding: 1rem;\r\n    max-height: 13rem;\r\n    width: 80%;\r\n    border-radius: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/vm-cat/vm-cat.component.html":
/*!**********************************************!*\
  !*** ./src/app/vm-cat/vm-cat.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\" style=\"margin-top:2%\"> \n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item active\" aria-current=\"page\"> Device Types  & Categories </li>\n                </ol>\n        </nav>\n    </div>\n\n    <div class=\"row img-container\" *ngFor=\"let cat of allCat\">\n        <h2 style=\"padding-left: 2rem; padding-bottom: 1rem;font-weight: 600\">  {{cat.category_name}}   </h2>\n        <div class=\"col-sm-3 col-sm-12 col-xs-12\" *ngFor=\"let type of cat.Types\">\n            <a  [routerLink]=\"['/tm/mdr/', type.id]\"> <img src=\"{{type.type_image}}\" class=\"image\"> </a>\n        </div>\n      </div>\n</div> \n  "

/***/ }),

/***/ "./src/app/vm-cat/vm-cat.component.ts":
/*!********************************************!*\
  !*** ./src/app/vm-cat/vm-cat.component.ts ***!
  \********************************************/
/*! exports provided: VmCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmCatComponent", function() { return VmCatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VmCatComponent = /** @class */ (function () {
    function VmCatComponent(paladionService, router) {
        this.paladionService = paladionService;
        this.router = router;
        this.getAllCat();
    }
    VmCatComponent.prototype.getAllCat = function () {
        var _this = this;
        this.paladionService.getCategoryByMdrTypeId('2').subscribe(function (data) {
            _this.allCat = data.data;
        });
    };
    VmCatComponent.prototype.navigateToMdr = function (id) {
        this.router.navigateByUrl('/vm/mdr/' + id);
    };
    VmCatComponent.prototype.ngOnInit = function () {
    };
    VmCatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vm-cat',
            template: __webpack_require__(/*! ./vm-cat.component.html */ "./src/app/vm-cat/vm-cat.component.html"),
            styles: [__webpack_require__(/*! ./vm-cat.component.css */ "./src/app/vm-cat/vm-cat.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VmCatComponent);
    return VmCatComponent;
}());



/***/ }),

/***/ "./src/app/vm-faq-detail/vm-faq-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/vm-faq-detail/vm-faq-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-half {\r\n    \r\n    -ms-grid-column: 32;\r\n    \r\n    grid-column: 32;\r\n  }\r\n\r\n  .greyBtn{\r\n    background: #404040;\r\n    color: #ffffff;\r\n}"

/***/ }),

/***/ "./src/app/vm-faq-detail/vm-faq-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/vm-faq-detail/vm-faq-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"faqPage\" class=\"tab-pane fade in active\">\n            <!-- <h3>FAQs</h3> -->\n            <table class=\"table table-condensed table-hover\">\n               <tr>\n                  <td><strong>Question</strong></td>\n                  <td><strong>Answer</strong></td>\n                  <td>\n                      <div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n                     <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n                     </div>\n                    </td>\n               </tr>\n               <tr *ngFor=\"let item of allFaqs;\">\n                  <td>{{item.question}}</td>\n                  <td>               \n                      <div [innerHTML]=\"trustHTML(item.answer)\"> </div> \n                  </td>\n                  \n               </tr>\n            </table>\n    \n    \n            <!--<div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n              <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n          </div>-->\n    \n         </div>\n         </div>\n    \n    "

/***/ }),

/***/ "./src/app/vm-faq-detail/vm-faq-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/vm-faq-detail/vm-faq-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: VmFaqDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmFaqDetailComponent", function() { return VmFaqDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VmFaqDetailComponent = /** @class */ (function () {
    function VmFaqDetailComponent(sanitizer, paladionService) {
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        this.mdrId = 2;
    }
    VmFaqDetailComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    VmFaqDetailComponent.prototype.getFaqByMdrTypeId = function () {
        var _this = this;
        this.paladionService.getFaqByMdrTypeId(this.mdrId).subscribe(function (data) {
            _this.allFaqs = data.data;
        });
    };
    VmFaqDetailComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.paladionService.isAdmin();
        if (this.mdrId) {
            this.getFaqByMdrTypeId();
        }
    };
    VmFaqDetailComponent.prototype.copyUrl = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = window.location.href;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        /* Alert the copied text */
        console.log(selBox.value);
    };
    VmFaqDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vm-faq-detail',
            template: __webpack_require__(/*! ./vm-faq-detail.component.html */ "./src/app/vm-faq-detail/vm-faq-detail.component.html"),
            styles: [__webpack_require__(/*! ./vm-faq-detail.component.css */ "./src/app/vm-faq-detail/vm-faq-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_2__["PaladionService"]])
    ], VmFaqDetailComponent);
    return VmFaqDetailComponent;
}());



/***/ }),

/***/ "./src/app/vm-faq/vm-faq.component.css":
/*!*********************************************!*\
  !*** ./src/app/vm-faq/vm-faq.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.right-half {\r\n    \r\n    -ms-grid-column: 32;\r\n    \r\n    grid-column: 32;\r\n  }\r\n\r\n.greyBtn{\r\n    background: #404040;\r\n    color: #ffffff;\r\n}\r\n\r\n/* .accordion {\r\n    background-color: #eee;\r\n    color: #444;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.active, .accordion:hover {\r\n    background-color: #eee;\r\n}\r\n\r\n.accordion:after {\r\n    content: '\\002B';\r\n    color: #777;\r\n    font-weight: bold;\r\n    float: left;\r\n    margin-left: 5px;\r\n}\r\n\r\n.active:after {\r\n    content: \"\\2212\";\r\n}\r\n\r\n.panel {\r\n    \r\n    background-color: #eee;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: max-height 0.2s ease-out;\r\n} */\r\n\r\n.panel-heading{\r\n    padding: 1.7rem;\r\n}\r\n\r\n.panel-title > a {\r\n    font-size: 20px;\r\n}\r\n\r\n.panel-body > span{\r\n    font-size: 18px;\r\n}\r\n\r\n.panel {\r\n    margin: 18px 0px 18px 0px;\r\n}\r\n\r\n.panel-title > a:before {\r\n    float: left !important;\r\n    font-family: FontAwesome;\r\n    content:\"\\f068\";\r\n    padding-right: 5px;\r\n}\r\n\r\n.panel-title > a.collapsed:before {\r\n    float: left !important;\r\n    content:\"\\f067\";\r\n}\r\n\r\n.panel-title > a:hover, \r\n.panel-title > a:active, \r\n.panel-title > a:focus  {\r\n    text-decoration:none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/vm-faq/vm-faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/vm-faq/vm-faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-1\"></div>\n<div class=\"container-fluid col-md-10 col-sm-10\">\n    <h2>FAQs</h2>\n    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"panel panel-default\" *ngFor=\"let faq of allFaqs\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"heading{{faq.id}}\">\n                 <h3 class=\"panel-title\">\n            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{faq.id}}\" aria-expanded=\"false\">\n              {{faq.question}}\n            </a>\n          </h3>\n    \n            </div>\n            <div id=\"{{faq.id}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" >\n                <div class=\"panel-body\"> <span [innerHTML]=trustHTML(faq.answer)>   </span></div>\n            </div>\n        </div> \n    </div>\n</div>\n\n<div class=\"right-half\" [hidden]=\"!isAdmin\" *ngIf=\"isAdmin\">\n        <button (click)=\"copyUrl()\" class=\"btn btn-default greyBtn\" style=\"margin-top: 5px;\">Copy Link</button>\n    </div>\n<div class=\"col-md-1\"></div>\n"

/***/ }),

/***/ "./src/app/vm-faq/vm-faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/vm-faq/vm-faq.component.ts ***!
  \********************************************/
/*! exports provided: VmFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmFaqComponent", function() { return VmFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VmFaqComponent = /** @class */ (function () {
    function VmFaqComponent(sanitizer, paladionService) {
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        //this.getAllFaqs();
    }
    VmFaqComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    VmFaqComponent.prototype.toggleMe = function (event) {
        event.path[0].classList.toggle("active");
        var panel = event.path[0].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    VmFaqComponent.prototype.getAllFaqs = function () {
        var _this = this;
        this.paladionService.getAllFaqsBasedOnMdrId('2').subscribe(function (data) {
            _this.allFaqs = data.data;
            console.log(_this.allFaqs);
        });
    };
    VmFaqComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.paladionService.isAdmin();
        this.getAllFaqs();
    };
    VmFaqComponent.prototype.copyUrl = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = window.location.href;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        /* Alert the copied text */
        console.log(selBox.value);
    };
    VmFaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vm-faq',
            template: __webpack_require__(/*! ./vm-faq.component.html */ "./src/app/vm-faq/vm-faq.component.html"),
            styles: [__webpack_require__(/*! ./vm-faq.component.css */ "./src/app/vm-faq/vm-faq.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"]])
    ], VmFaqComponent);
    return VmFaqComponent;
}());



/***/ }),

/***/ "./src/app/vm-mdr-detail/vm-mdr-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/vm-mdr-detail/vm-mdr-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdr-footer{\r\n    min-height: 48px;\r\n    background: #eee;\r\n    padding: 15px;\r\n}\r\n.vote{\r\n    min-width: 46px;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n.arr-right .breadcrumb-item+.breadcrumb-item::before {\r\n    content: \">\";\r\n    vertical-align:middle;\r\n    color: #408080;\r\n    font-size:18px;\r\n    line-height:16px; \r\n}"

/***/ }),

/***/ "./src/app/vm-mdr-detail/vm-mdr-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/vm-mdr-detail/vm-mdr-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n        <div class=\"row\" style=\"margin-top:2%\">\n                <div class=\"col-md-1\"> </div>\n\n                <div class=\"col-md-10\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb arr-right\">\n                        <li class=\"breadcrumb-item\"><a href=\"vm/cat\">  Device Types  & Categories </a></li>\n                        <li class=\"breadcrumb-item\"><a href=\"vm/mdr/{{mdr.type_id}}\"> Versions  </a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"> Log Forwarding Steps </li>\n                    </ol>\n                      </nav>\n                </div>\n                <div class=\"col-md-1\"></div>\n\n        </div>\n\n        \n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\">\n        <div class=\"\" style=\"float:left;padding: 5px 15px 0px 0px;\">\n            <div class=\"text-center\">\n              <img src=\"{{imgurl}}\" width=\"120\" height=\"120\" class=\"img-circle\">\n            </div>\n            <!-- <div class=\"vote\"> \n                <img src=\"assets/images/vote-up.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                <p itemprop=\"upvoteCount\" class=\"vote-count-post\" style=\"margin: 0px;\">9</p>\n                <img src=\"assets/images/vote-down.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n            </div>  -->\n        </div>\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n            <!--<p style=\"margin-bottom: 5px;\"> Updated: March 22, 2018 </p>-->\n            <h2 style=\"margin-top:0px;color:#c1272b;font-size:30px;\"> {{mdr.title}} </h2>\n            <button (click)=\"copyUrl()\">Copy Link</button>\n            <div [innerHTML]=\"trustHTML(mdr.long_desc)\" style=\"color:404040;font-size: 21px;\"></div>              \n        </div>\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vm-mdr-detail/vm-mdr-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/vm-mdr-detail/vm-mdr-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: VmMdrDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmMdrDetailComponent", function() { return VmMdrDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VmMdrDetailComponent = /** @class */ (function () {
    function VmMdrDetailComponent(sanitizer, paladionService, route) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.mdrId = params.id; });
    }
    VmMdrDetailComponent.prototype.ngOnInit = function () {
        this.getMDRLogs();
    };
    VmMdrDetailComponent.prototype.trustHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    VmMdrDetailComponent.prototype.getMDRLogs = function () {
        var _this = this;
        this.paladionService.getMdrLogsById(this.mdrId).subscribe(function (data) {
            _this.mdr = data.data;
            if (_this.mdr) {
                _this.paladionService.getTypeById(_this.mdr.type_id).subscribe(function (data) {
                    _this.imgurl = data.data.type_image;
                });
            }
        });
    };
    VmMdrDetailComponent.prototype.copyUrl = function () {
        var copyText = null;
        copyText.value = window.location.href;
        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        document.execCommand("copy");
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    };
    VmMdrDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vm-mdr-detail',
            template: __webpack_require__(/*! ./vm-mdr-detail.component.html */ "./src/app/vm-mdr-detail/vm-mdr-detail.component.html"),
            styles: [__webpack_require__(/*! ./vm-mdr-detail.component.css */ "./src/app/vm-mdr-detail/vm-mdr-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VmMdrDetailComponent);
    return VmMdrDetailComponent;
}());



/***/ }),

/***/ "./src/app/vm-mdr/vm-mdr.component.css":
/*!*********************************************!*\
  !*** ./src/app/vm-mdr/vm-mdr.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdr-footer{\r\n    min-height: 48px;\r\n    background: #eee;\r\n    padding: 15px;\r\n}\r\n.vote{\r\n    min-width: 46px;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n.arr-right .breadcrumb-item+.breadcrumb-item::before {\r\n    content: \">\";\r\n    vertical-align:middle;\r\n    color: #408080;\r\n    font-size:18px;\r\n    line-height:16px; \r\n  }\r\n  "

/***/ }),

/***/ "./src/app/vm-mdr/vm-mdr.component.html":
/*!**********************************************!*\
  !*** ./src/app/vm-mdr/vm-mdr.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n\n        <div class=\"row\" style=\"margin-top:2%\">\n                <div class=\"col-md-1\"> </div>\n\n                <div class=\"col-md-10\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb arr-right\">\n                        <li class=\"breadcrumb-item\"><a href=\"tm/cat\">Device Category </a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"> Version </li>\n                      </ol>\n                      </nav>\n                </div>\n                      <div class=\"col-md-1\"></div>\n\n        </div>\n\n\n        <div class=\"row\" *ngFor=\"let mdr of allMdrs\">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\n        border-bottom: 1px dashed #d3222d;\">\n     \n            <div class=\"\" style=\"float:left;padding: 5px 15px 0px 0px;\">\n                <div class=\"text-center\">\n                  <img src=\"{{imgurl}}\" width=\"42\" height=\"42\" class=\"img-circle\">\n                </div>\n                <div class=\"vote\"> \n                    <img src=\"assets/images/vote-up.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                    <p itemprop=\"upvoteCount\" class=\"vote-count-post\" style=\"margin: 0px;\">9</p>\n                    <img src=\"assets/images/vote-down.png\" alt=\"Smiley face\" width=\"24\" height=\"18\">\n                </div> \n            </div>\n            <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n                \n                <!--<p style=\"margin-bottom: 5px;\"> Updated: March 22, 2018 </p>-->\n                <h2 style=\"margin-top:0px;color:#c1272b;font-size:30px;\"> {{mdr.title}} </h2>\n                <p style=\"color:404040;font-size: 21px;\">  {{mdr.short_desc}} </p>\n                <div class=\"mdr-footer\">              \n                    <span style=\"background: white;padding: 7px;\"> \n                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{mdr.view}} views \n                    </span>              \n                    <span [routerLink]=\"['/tm/mdrdetail/', mdr.id]\"\n                      class=\"float-right\" style=\"float:right  ;  background: black;\n                            float: right;\n                            color: white;\n                            padding: 3px;\n                            font-size: 14px;cursor: pointer;\">\n                     More... \n                    </span>             \n                </div>  \n            </div>  \n        </div>\n        <div class=\"col-md-1\">\n        </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/vm-mdr/vm-mdr.component.ts":
/*!********************************************!*\
  !*** ./src/app/vm-mdr/vm-mdr.component.ts ***!
  \********************************************/
/*! exports provided: VmMdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmMdrComponent", function() { return VmMdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VmMdrComponent = /** @class */ (function () {
    function VmMdrComponent(paladionService, route) {
        var _this = this;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.typeId = params.id; });
    }
    VmMdrComponent.prototype.ngOnInit = function () {
        this.getTypeImage();
        this.getAllMdrLogs();
    };
    VmMdrComponent.prototype.getTypeImage = function () {
        var _this = this;
        this.paladionService.getTypeById(this.typeId).subscribe(function (data) {
            _this.imgurl = data.data.type_image;
        });
    };
    VmMdrComponent.prototype.getAllMdrLogs = function () {
        var _this = this;
        this.paladionService.getMdrByTypeId(this.typeId).subscribe(function (data) {
            _this.allMdrs = data.data;
        });
    };
    VmMdrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vm-mdr',
            template: __webpack_require__(/*! ./vm-mdr.component.html */ "./src/app/vm-mdr/vm-mdr.component.html"),
            styles: [__webpack_require__(/*! ./vm-mdr.component.css */ "./src/app/vm-mdr/vm-mdr.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VmMdrComponent);
    return VmMdrComponent;
}());



/***/ }),

/***/ "./src/app/vm-page/vm-page.component.css":
/*!***********************************************!*\
  !*** ./src/app/vm-page/vm-page.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vm-page/vm-page.component.html":
/*!************************************************!*\
  !*** ./src/app/vm-page/vm-page.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-10\" style=\"display: flex;    margin-bottom: 25px;\">\n        <div class=\"\" style=\"width: -webkit-fill-available;margin-bottom: 25px;\">\n            <div><p innerHTML=\"{{page.content}}\"></p></div> \n        </div>\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n"

/***/ }),

/***/ "./src/app/vm-page/vm-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vm-page/vm-page.component.ts ***!
  \**********************************************/
/*! exports provided: VmPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmPageComponent", function() { return VmPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VmPageComponent = /** @class */ (function () {
    function VmPageComponent(paladionService, route) {
        var _this = this;
        this.paladionService = paladionService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.pageId = params.id; });
    }
    VmPageComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    VmPageComponent.prototype.getPage = function () {
        var _this = this;
        this.paladionService.getPageById(this.pageId).subscribe(function (data) {
            _this.page = data.data;
        });
    };
    VmPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vm-page',
            template: __webpack_require__(/*! ./vm-page.component.html */ "./src/app/vm-page/vm-page.component.html"),
            styles: [__webpack_require__(/*! ./vm-page.component.css */ "./src/app/vm-page/vm-page.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["PaladionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VmPageComponent);
    return VmPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Mdr-Portal_niraj latest code 2-2-2019\Paladion-mdr for local\paladion-mdr-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map