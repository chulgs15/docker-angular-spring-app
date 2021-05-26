import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../../service/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url != '/api/jwt/') {
      request = request.clone({
        setHeaders: {
          Authorization:
            this.auth.getToken() == null
              ? ''
              : `Bearer ${this.auth.getToken()}`,
        },
      });
    }

    // return next.handle(request).pipe(
    //   catchError((error) => {
    //     if (error instanceof HttpErrorResponse && error.status === 401) {
    //       this.auth.logout();
    //     } else {
    //       return next.handle(request);
    //     }
    //   })
    // );
    return next.handle(request);
  }
}
