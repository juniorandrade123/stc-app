import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { AuthService } from "../core/auth/auth.service";
import { Router } from "@angular/router";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request)).pipe(
      retry(1),
      catchError((e) => this.handleError(e))
    );
  }

  addAuthToken(request: HttpRequest<any>) {
    const token = this.authService.token;

 //   if (token == null) {
 //     this.router.navigate(["login"]);
  //  }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    let errorMessage = "";

    if (error.status == 401) {
      this.router.navigate(["login"]);
      return of(null);
    }

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status} - Message: ${error.message}`;
    }

    console.error(errorMessage);
    throwError(errorMessage);
  }
}
