import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ngx-ckeditor';
import { CookieService } from 'ngx-cookie-service';
import { NgSelectModule } from '@ng-select/ng-select';


 
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { routing } from "./app.routing";
import { AdminComponent } from './admin/admin.component';
import { PaladionService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { LoginComponent } from './login/login.component';
import { MdrComponent } from './mdr/mdr.component';
//import { MdrDetailComponent } from './mdr-detail/mdr-detail.component';
//import { VmFaqComponent } from './vm-faq/vm-faq.component';
//import { TmFaqComponent } from './tm-faq/tm-faq.component';
//import { PageComponent } from './page/page.component';
import { HttpClient } from '@angular/common/http';
//import { VmCatComponent } from './vm-cat/vm-cat.component';
//import { TmCatComponent } from './tm-cat/tm-cat.component';
//import { VmMdrComponent } from './vm-mdr/vm-mdr.component';
//import { TmMdrComponent } from './tm-mdr/tm-mdr.component';
//import { TmMdrDetailComponent } from './tm-mdr-detail/tm-mdr-detail.component';
//import { VmMdrDetailComponent } from './vm-mdr-detail/vm-mdr-detail.component';
import { OnlyLoggedInAdminsGuardService } from './guard-admin';
import { OnlyLoggedInUsersGuard } from './guard-user';
import { AlertComponent } from './alert/alert.component';
//import { VmPageComponent } from './vm-page/vm-page.component';
//import { TmPageComponent } from './tm-page/tm-page.component';
import { FileSelectDirective } from 'ng2-file-upload';
import {MatButtonModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
//import { TmFaqDetailComponent } from './tm-faq-detail/tm-faq-detail.component';
//import { VmFaqDetailComponent } from './vm-faq-detail/vm-faq-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    AdminComponent,
    LoginComponent,
    MdrComponent,
    //MdrDetailComponent,
    //VmFaqComponent,
    //TmFaqComponent,
    //PageComponent,
    //VmCatComponent,
    //TmCatComponent,
    //VmMdrComponent,
    //TmMdrComponent,
    //TmMdrDetailComponent,
    //VmMdrDetailComponent,
    AlertComponent,
    //VmPageComponent,
    //TmPageComponent,
    FileSelectDirective,
   // TmFaqDetailComponent,
    //VmFaqDetailComponent,
   
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'my-app'}),
    routing,
    FormsModule,
    ReactiveFormsModule,    
    HttpModule,
    CKEditorModule,
    NgSelectModule,
    MatButtonModule, MatCheckboxModule,MatSelectModule,NoopAnimationsModule,
    NgxPaginationModule, 
    Ng2SearchPipeModule,
    
    BootstrapModalModule.forRoot({container: document.body})
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule],
  providers: [PaladionService, CookieService, HttpClient, OnlyLoggedInUsersGuard, OnlyLoggedInAdminsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
