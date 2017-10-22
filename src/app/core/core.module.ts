import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './support/token.interceptor';
import { FormsModule }   from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [AlertComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, AuthService, PostService, AlertService, UserService
  ],
  exports: [
    AlertComponent
  ]
})
export class CoreModule { }
