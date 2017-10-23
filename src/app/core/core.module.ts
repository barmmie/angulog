import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './support/jwt.interceptor';
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
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [AlertComponent, DateFormatPipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }, AuthService, PostService, AlertService, UserService, DateFormatPipe, AuthGuard
  ],
  exports: [
    AlertComponent,
    DateFormatPipe
  ]
})
export class CoreModule { }
