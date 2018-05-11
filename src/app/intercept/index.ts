import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'Rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        console.log(event);
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            // JWT expired, go to login
          }
        }
        return event;
      })
    );
  }
}

