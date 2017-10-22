import { AlertService } from './../../../core/services/alert.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth:AuthService, public router:Router, public alert:AlertService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
    this.alert.info('You have been logged out');

  }

}
