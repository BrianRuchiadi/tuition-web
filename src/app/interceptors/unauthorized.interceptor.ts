import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              // case 401: return this.router.navigate(['/login']);
              case 401:
                console.log('__Unauthorized', this.router.url);
                let returnUrl;
                if (!this.router.url.startsWith('/login')) {
                  returnUrl = this.router.url;
                }

                if (returnUrl) {
                  // console.log('__returnUrl', returnUrl);
                  return this.router.navigate(['/login'], { queryParams: { 'return': returnUrl } });
                } else {
                  return this.router.navigate(['/login']);
                }
            }
          }
        })
    );
  }
}
