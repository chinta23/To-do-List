import { Injectable, EventEmitter, Output } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class PaladionService {

    BASEURL = 'http://localhost:3000/';
    UIBASE = 'http://localhost:4200/';

    //BASEURL = 'http://40.117.79.37:3000/';
    //UIBASE = 'http://40.117.79.37:4200/';

    constructor(private http: Http,private cookieService: CookieService) {

    }

    getBaseUrl() {
        return this.BASEURL;
    }

    getUiBase() {
        return this.UIBASE;
    }

    getAllFaqs() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.BASEURL + "api/faq", options).pipe(
            map((res: Response) => res.json() || []) 
        );
    }

    getProjectSummaryByMdrTypeId(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.BASEURL + "api/project_summary/mdrtype/"+id, options).pipe(
            map((res: Response) => res.json() || [])
        );
    }
    getProjectSummaryByProjectStatus(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.BASEURL + "api/project_summary/mdrtype/"+id, options).pipe(
            map((res: Response) => res.json() || [])
        );
    }
    getAllFaqsBasedOnMdrId(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.BASEURL + "api/faq/mdrtype/"+id, options).pipe(
            map((res: Response) => res.json() || [])
        );
    }

   
    getAllTypesForAdmin() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.get(this.BASEURL + "api/admin/type", options).pipe(
            map((res: Response) => res.json() || []) 
        )
    }

    getAllMdrLogs() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.get(this.BASEURL + "api/mdr", options).pipe(
            map((res: Response) => res.json() || [])
        ) 
    }

    getMdrByMdrTypeId(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.BASEURL + "api/mdr/mdrtype/"+id, options).pipe(
            map((res: Response) => res.json() || [])
        );
    }

    getMdrByTypeId(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.BASEURL + "api/mdr/type/"+id, options).pipe(
            map((res: Response) => res.json() || [])
        );
    }

    getMdrLogsById(id){
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers:headers});
        return this.http.get(this.BASEURL + "api/mdr/" + id, options).pipe(
            map((res: Response)=> res.json() || [])
        )
    }

    deleteProjectSummary(data) {
        console.log('in Delete Faq Service!');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.BASEURL + 'api/project_summary', {body: data}).pipe(
            map((res: Response) => res.json() || [])
        )
    }

    
    



    updateprojectSummary(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.BASEURL + 'api/project_summary', data, options).pipe(
            map((res: Response) => res.json() || [])
        )
    }

   
    addFaq(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.BASEURL + 'api/faq', data, options).pipe(
            map((res: Response) => res.json() || [])         
        )
    }

    addprojectSummary(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.BASEURL + 'api/project_summary', data, options).pipe(
            map((res: Response) => res.json() || [])         
        )
    }

   
    login(data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.BASEURL + 'api/user/auth', data, options).pipe(
            map((res: Response) => res.json() || [] )            
        )
    }

    isAdmin(): boolean{
        let cookieValue = this.cookieService.get('palIdentify');
        if(cookieValue=='13f1f0d7-510c-448c-9e22-99d7dcd4e720'){
            return true;
        }else{
            return false;
        }
    }

    isUser(): boolean{
        let cookieValue = this.cookieService.get('palIdentify');
        if(cookieValue=='f9fa2cdd8cacb7dfdff3bd0a721540476183' || cookieValue=='13f1f0d7-510c-448c-9e22-99d7dcd4e720'){
            return true;
        }else{
            return false;
        }
    }


    

}