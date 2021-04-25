import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, throwError } from 'rxjs';
import { PaladionService } from '../app.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  pageloggedin=false;
  submitted = false;
  error='';
  returnUrl: string;
  

  cookieValue = 'UNKNOWN';
  
  showErrormsg =false; 
  constructor(      
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private paladionService: PaladionService,
    private cookieService: CookieService

    ) {
       
  }

  expiredDate:any;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

   this.expiredDate = new Date();  
    this.expiredDate.setDate( this.expiredDate.getDate() + 1 );

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

     // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    
      // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
       //return throwError({ error: { message: 'Username or password is incorrect' } });
    }

    

    let data = {
      username:this.f.username.value,
      password:this.f.password.value
    }

    //this.loading = true;
    this.pageloggedin=true;
    this.paladionService.login(data)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data);
              if(data.status=='SUCCESS'){
                this.cookieService.set( 'palIdentify', data.type, this.expiredDate );
                if(data.type=='13f1f0d7-510c-448c-9e22-99d7dcd4e720'){
                  this.router.navigate(['/admin'])
                return false;
                }
                if(data.type=='f9fa2cdd8cacb7dfdff3bd0a721540476183'){
                  this.router.navigate(['/tm/cat'])
                   return false;;
                }

             //this.pageloggedin=true; 
              }
              this.loading = true;
              /*else{
                return this.pageloggedin=false;
                //return throwError({ error: { message: 'Username or password is incorrect' } });
               
              }*/

            // this.router.navigate([this.returnUrl]);
            })
  }

}
