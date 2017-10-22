import { AlertService } from './../services/alert.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router:Router, public alertService:AlertService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.dir(err);
        
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
          console.dir(err);
          this.alertService.error('You have been logged out');
          this.router.navigate(['/home']);
        }
      }
    });
  }
}