import { Router } from '@angular/router';
import { AlertService } from './core/services/alert.service';
import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor( public auth:AuthService, public alert:AlertService, public router:Router) {

  }


  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
    this.alert.info('You have been logged out');

  }
}
