import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subscription, interval } from 'rxjs';
import { tap } from 'rxjs/operators';
// import PermissionService from '@services/permissions/permission.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let token;
          let body;
          token = event.headers.get('Authorization');
          token = token && token.replace(/^Bearer /, '');
          if (token) {
            // read token
            body = event.body.data;
            const helper = new JwtHelperService();
            const decoded = helper.decodeToken(token);
            console.log('__decoded', decoded);
            localStorage.setItem('jwt_token', token);
            localStorage.setItem('user_id', decoded.user_id);
            localStorage.setItem('user_name', body.name);
            // localStorage.setItem(
            //   'permissions',
            //   JSON.stringify(decoded.permissions)
            // );
            // localStorage.setItem(
            //   'revokedPermissions',
            //   JSON.stringify(decoded.revokedPermissions)
            // );
          }
          return;
        }
      })
    );
  }
}
