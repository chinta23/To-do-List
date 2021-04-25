import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
//import { MdrComponent } from './mdr/mdr.component';
//import { MdrDetailComponent } from './mdr-detail/mdr-detail.component';
//import { VmFaqComponent } from './vm-faq/vm-faq.component';
//import { TmFaqComponent } from './tm-faq/tm-faq.component';
//import { PageComponent } from './page/page.component';
//import { VmCatComponent } from './vm-cat/vm-cat.component';
//import { TmCatComponent } from './tm-cat/tm-cat.component';
//import { TmMdrComponent } from './tm-mdr/tm-mdr.component';
//import { VmMdrComponent } from './vm-mdr/vm-mdr.component';
//import { TmMdrDetailComponent } from './tm-mdr-detail/tm-mdr-detail.component';
//import { VmMdrDetailComponent } from './vm-mdr-detail/vm-mdr-detail.component'; 
import { OnlyLoggedInUsersGuard } from './guard-user';
import { OnlyLoggedInAdminsGuardService } from './guard-admin';
//import { TmPageComponent } from './tm-page/tm-page.component';
//import { VmPageComponent } from './vm-page/vm-page.component';
//import{ TmFaqDetailComponent} from './tm-faq-detail/tm-faq-detail.component';
//import{ VmFaqDetailComponent} from './vm-faq-detail/vm-faq-detail.component';

const APP_ROUTES: Routes = [
      {
        path: 'login',
        component: LoginComponent,
      },
     
      {
        path: 'admin',
        component: AdminComponent,
         canActivate: [OnlyLoggedInAdminsGuardService] 
      },
     



      
      {
        path: '**',
        component: LoginComponent,
        canActivate: [OnlyLoggedInUsersGuard] 
      }
]


export const routing = RouterModule.forRoot(APP_ROUTES);