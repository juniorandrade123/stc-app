import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseError } from './response-error';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private urlBase = environment.url;
    private urlBaseCep = environment.urlCep;
    
    constructor(
        private http: HttpClient, 
        private authService: AuthService) { }

    get<T>(url: string, errorParams?: ResponseError<T>, httpOptions: any = {}): Observable<T> {
        const defaultHttp = this.getOptions();
        const requestHttpOptions: Object = { ...defaultHttp, ...httpOptions };

        return this.http.get<T>(this.urlBase + url, requestHttpOptions).pipe(
            catchError( e => this.handleError(e) )
        );
    }

    getCep<T>(url: string, errorParams?: ResponseError<T>, httpOptions: any = {}): Observable<T> {
        const defaultHttp = new HttpHeaders();
        defaultHttp.set('Content-Type', 'application/json');
        const requestHttpOptions: Object = { ...defaultHttp, ...httpOptions };
        return this.get<T>(this.urlBaseCep + url, requestHttpOptions);
    }
    post<D, R>(url: string, data: D, errorParams?: ResponseError<R>, httpOptions: any = {}): Observable<R> {
        const defaultHttp = this.getOptions();
        const requestHttpOptions: Object = { ...defaultHttp, ...httpOptions };

        return this.http.post<R>(this.urlBase + url, data, requestHttpOptions).pipe(
            catchError( e => this.handleError(e) )
        );
    }
    put<D, R>(url: string, data: D, errorParams?: ResponseError<R>, httpOptions: any = {}): Observable<R> {
        const defaultHttp = this.getOptions();
        const requestHttpOptions: Object = { ...defaultHttp, ...httpOptions };

        return this.http.put<R>(this.urlBase + url, data, requestHttpOptions).pipe(
            catchError( e => this.handleError(e) )
        );
    }
    postReturnString<D, R>(url: string, data: D, errorParams?: ResponseError<R>, httpOptions: any = {}): Observable<R> {
        const defaultHttp = this.getOptions();
        const requestHttpOptions: Object = { ...defaultHttp, ...httpOptions };

        return this.http.post<R>(this.urlBase + url, data, requestHttpOptions).pipe();
    }

    downloadFile(idFile: number, fileName: string) {
        const fullUri = this.urlBase + 'File/Download/' + idFile;
        return fullUri
    }

    private handleError<T>(error: HttpErrorResponse) {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status} - Message: ${error.message}`;
        }

        return throwError(errorMessage);        
    }

    
//   private getOptions(addContentType = true): any {
//     const headers = {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
//     };

//     if (this.authService.token) {
//       headers['Authorization'] = `Bearer ${this.authService.token}`;
//     }

//     return { headers: headers };
//   }

  private getOptions(params = {}, body = {}, addContentType = true): any {
    let headers = new HttpHeaders();

    if (addContentType) {
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // tslint:disable-next-line: max-line-length
        headers = headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    }

    if (this.authService.token) {
        headers = headers.set('Authorization', `Bearer ${this.authService.token}`);
    }

    if (this.authService.tenantID) {
        headers = headers.set('tenant', this.authService.tenantID);
    }

    return { headers: headers }
}
}