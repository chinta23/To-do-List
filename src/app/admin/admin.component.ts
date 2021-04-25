import { Component, OnInit, ViewChild, ViewEncapsulation,Pipe,PipeTransform } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule,Validators } from "@angular/forms";
import { PaladionService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';
import { Http, Response } from "@angular/http";
import {NgForm} from '@angular/forms';

import Swal from 'sweetalert2';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

//import * from 'chart.js';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

declare const myTest:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  
  
form: FormGroup;
  pattern1 =  "^[0-9_-]{10,12}";
  cust_name:any;
  searchText;
  
  onClick(){
    myTest();
  }
  
  

  

  html=this.sanitizer.bypassSecurityTrustHtml('<span style="color:red">this works</span>');

  mdrId:any;

  allprojectSummary: any;
  
  
  allMdrLogs: any;

  

  selCategories = [];
  typeByCategory = [];
  selData = [];

  updateprojectSummary = false;
  updateCategory = false;
  updateType = false;
  updateMdrLogs = false;
  updatePage = false;
  updateIcon = false;

  addprojectSummary = false;
  addCategory = false;
  addType = false;
  addMdrLogs = false;
  addPage = false;
  addIcon = false;

  projectSummaryAddForm: any = {
    cust_name: '',
    project_name: '',
    region: '',
    Country: '',
    project_manager: '',
    imp_engineer_email: '',
    project_status: '',   
    order:''
  };
  config: any;
  collection = { count: 60, data: [this.allprojectSummary] };
  
  projectSummaryUpdateForm: any = {
    updateId: '',
    updatecust_name: '',
    updateproject_name: '',
    updateregion: '',
    updateCountry: '',
    updateproject_manager: '',
    updateimp_engineer_email: '',
    updateproject_status: '',
    

  };

  categoryAddForm: any = {
    category: ''
  }

  categoryUpdateForm: any = {
    updateCategoryId: '',
    updateCategoryName: ''
  }

  typeAddForm: any = {
    category_id: '',
    type_name: '',
    type_image: ''
  }

  iconAddForm: any = {
    title:'',
    icon:''
  }

  typeUpdateForm: any = {
    updateTypeId : '',
    updateCategory_Id: '',
    updateCategoryTypeName: '',
    updateCategoryTypeImage: ''
  }

  mdrLogsAddForm: any = {
    mdr_category_id: '',
    mdr_type_id: '',
    title: '',
    short_desc: '',
    long_desc: ''
  }

  mdrLogsUpdateForm: any = {
    updateMdrId: '',
    updateTitle: '',
    updateShortDesc: '',
    updateLongDesc: '',
    updateCategoryType_Id: '',
    update_Category_Id: ''
  }

  pageAddForm: any = {
    title:'',
    content: ''
  }

  pageUpdateForm: any = {
    updatePageId: '',
    updatePageContent: '',
    updatePageTitle:''
  }

  iconUpdateForm: any ={
    updateIconId:'',
    updateIconTitle:'',
    updateIconUrl:''
  }

  data = [
    {category: '01', type: 'Windows'},
    {category: '01', type: 'Linux'},
    {category: '01', type: 'Oracle Solaris'},
    {category: 'Databases', type: 'Oracle'},
    {category: 'Databases', type: 'Microsoft SQL'},
    {category: 'Firewall', type: 'Fortinet'},
    {category: 'Firewall', type: 'Cisco' }
  ]
  Onhold_Status:any=[]
  OnHold_count:any;
  Active_Status:any=[]
  Active_count:any;
  Completed_Status:any=[]
  Completed_count:any;
  Canceled_Status:any=[]
  Canceled_count:any;
  show_chart:boolean=false;
  count:any;
  

  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private paladionService: PaladionService, private cookieService: CookieService, private http: Http ) { 
    this.mdrId=1;
    //monkeyPatchChartJsTooltip();
    //monkeyPatchChartJsLegend();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

    this.projectSummaryAddForm = this.formBuilder.group({
      'cust_name': [''],
      'project_name': [''],
      'region': [''],
      'Country': [''],
      'project_manager': [''],
      'imp_engineer_email': [''],
      'project_status': [''],
      'order': ['']
     
    });

  
    // let project_status_count='project_status';
    // const CountOccurance=function(project_status_count,val){

    //   return project_status_count.reduce((acc,elem)=>{
    //     return(val===elem?acc+1:acc)
    //   },0);
    //   };

   // console.log(CountOccurance(project_status_count,"On Hold"));


    this.projectSummaryUpdateForm = this.formBuilder.group({
      'updateId': [''],
      'updatecust_name': [''],
      'updateproject_name': [''],
      'updateregion': [''],
      'updateCountry': [''],
      'updateproject_manager': [''],
      'updateimp_engineer_email': [''],
      'updateproject_status': [''],
    });

    this.categoryAddForm = this.formBuilder.group({
      'category': ['']
    })

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
    })

    this.mdrLogsUpdateForm = this.formBuilder.group({
      'updateMdrId': [''],
      'updateTitle': [''],
      'updateShortDesc': [''],
      'updateLongDesc': [''],
      'updateCategoryType_Id': [''],
      'update_Category_Id': ['']
    });
    this.pageAddForm = this.formBuilder.group({
      'title':[''],
      'content': ['']
    });
    this.pageUpdateForm = this.formBuilder.group({
      'updatePageId': [''],
      'updatePageContent': [],
      'updatePageTitle':['']
    })
    }

     pageChanged(event){
    this.config.currentPage = event;
  }
     
    

    getProjectSummaryByProjectStatus(){
      this.paladionService.getProjectSummaryByProjectStatus(this.projectSummaryAddForm.controls.project_status.value).subscribe(data => {
        this.allprojectSummary = data.data;
        console.log(this.allprojectSummary);
        

      }) 
    }
  
    getProjectSummaryByMdrTypeId(){
      this.paladionService.getProjectSummaryByMdrTypeId(this.mdrId).subscribe(data => {
        this.allprojectSummary = data.data;
       // console.log(this.allprojectSummary.project_status);
        console.log(this.allprojectSummary);
               


      }) 
    }


    

    

    

    

    

    

  openCity(evt, tabId) {
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
}



filterCategories(filterVal) {
  // console.log(filterVal);
  this.selCategories.push(filterVal);
  // console.log(this.selCategories);
}

typeBasedOnCategory(categ) {
  console.log(categ);
  this.typeByCategory = this.data.filter((item) => item.category == categ);
  console.log(this.typeByCategory);
}

filterTypes(filterVal) {
  console.log(filterVal);
this.selData = filterVal;
console.log(this.selData);
}

openAddprojectSummary() {
  this.addprojectSummary = true;
}

closeAddprojectSummary() {
  this.addprojectSummary = false;
}

projectSummaryAdd() {
  console.log(this.projectSummaryAddForm.value);

  let data = 
    {
    "cust_name": this.projectSummaryAddForm.controls.cust_name.value,
    "project_name": this.projectSummaryAddForm.controls.project_name.value,
    "region": this.projectSummaryAddForm.controls.region.value,
    "Country": this.projectSummaryAddForm.controls.Country.value,
    "project_manager": this.projectSummaryAddForm.controls.project_manager.value,
    "imp_engineer_email": this.projectSummaryAddForm.controls.imp_engineer_email.value,
    "project_status": this.projectSummaryAddForm.controls.project_status.value,
    "mdr_type_id": this.mdrId

    }
  

  this.paladionService.addprojectSummary(data).subscribe(data => {
    console.log(data);
    Swal(
      'Task!!!',
      'Successfully Added !',
      'success'
    )
    this.getProjectSummaryByMdrTypeId();
    this.addprojectSummary = false;
  })

}

openupdateprojectSummary(item) {
  console.log(item);
  this.updateprojectSummary = true;
  this.projectSummaryUpdateForm.controls.updateId.value = item.id;
  this.projectSummaryUpdateForm.controls.updatecust_name.value = item.cust_name;
  this.projectSummaryUpdateForm.controls.updateproject_name.value = item.project_name;
  this.projectSummaryUpdateForm.controls.updateregion.value = item.region;
  this.projectSummaryUpdateForm.controls.updateCountry.value = item.Country;
  this.projectSummaryUpdateForm.controls.updateproject_manager.value = item.project_manager;
  this.projectSummaryUpdateForm.controls.updateimp_engineer_email.value = item.imp_engineer_email;
  this.projectSummaryUpdateForm.controls.updateproject_status.value = item.project_status;
  
 
}

closeupdateprojectSummary() {
  this.updateprojectSummary = false;
}

projectSummaryUpdate() {
  console.log(this.projectSummaryUpdateForm.value);
  var data = {
    "id": this.projectSummaryUpdateForm.controls.updateId.value,
    "cust_name": this.projectSummaryUpdateForm.controls.updatecust_name.value,
    "project_name": this.projectSummaryUpdateForm.controls.updateproject_name.value,
    "region": this.projectSummaryUpdateForm.controls.updateregion.value,
    "Country": this.projectSummaryUpdateForm.controls.updateCountry.value,
    "project_manager": this.projectSummaryUpdateForm.controls.updateproject_manager.value,
    "imp_engineer_email": this.projectSummaryUpdateForm.controls.updateimp_engineer_email.value,
    "project_status": this.projectSummaryUpdateForm.controls.updateproject_status.value,
    
  }

  this.paladionService.updateprojectSummary(data).subscribe(data => {
    Swal(
      'Task!!!',
      'Successfully updated Project Summary!!!',
      'success'
    )
    this.getProjectSummaryByMdrTypeId();
    this.updateprojectSummary = false;
  })

}

ProjectSummaryDelete(item) {
  console.log(item);
  var data = {
    "id": item.id
  }
  console.log(data);  
  Swal({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Project Summary!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this.paladionService.deleteProjectSummary(data).subscribe(data => {
        console.log(data);
        Swal(
          'Deleted!',
          'Your Project Summary has been deleted.',
          'success'
        )
        this.getProjectSummaryByMdrTypeId();
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal(
        'Cancelled',
        'Your FAQ is safe :)',
        'error'
      )
    }
  })
}

openAddCategory() {
  this.addCategory = true;
}

closeAddCategory() {
  this.addCategory = false;
}


openUpdateCategory(item) {
console.log(item);
this.updateCategory = true;
this.categoryUpdateForm.controls.updateCategoryId.value = item.id;
this.categoryUpdateForm.controls.updateCategoryName.value = item.category_name;
}

closeUpdateCategory() {
  this.updateCategory = false;
}











getLinkForFaqDetail(){
  if(this.mdrId==1){
    //var datatype1='f9fa2cdd8cacb7';
   // return this.paladionService.getUiBase()+'tm/faqdetails';
   return this.paladionService.getUiBase()+'tm/faq';
   
  }
  if(this.mdrId==2){
    //return this.paladionService.getUiBase()+'tm/faqdetails';
    return this.paladionService.getUiBase()+'vm/faq';
  }
}


changeMdr(){

  this.getProjectSummaryByMdrTypeId();
  
  
  //this.cookieService.set( 'mdrId', this.mdrId );
}

trustHTML(html){
 return this.sanitizer.bypassSecurityTrustHtml(html)
}

cookieValue = 'UNKNOWN';
 ngOnInit() {

 
  
     if(this.mdrId){
      this.getProjectSummaryByMdrTypeId()
     }

     

     

     


  }

/*   Search(){
    if(this.cust_name==""){
 this.ngOnInit();
    }else{

    }
  } */

  
}
