import { AlertService } from './../services/alert.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private authService: AuthService,
    private alertService:AlertService) {}

  canActivate() {
    if (!this.authService.isTokenExpired()) {
      return true;
    }
    this.alertService.error('You need to login to proceed');
    
    this.router.navigate(['/login']);
    return false;
  }

}