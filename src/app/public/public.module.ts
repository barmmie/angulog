import { FormsModule } from '@angular/forms';
import { CoreModule } from './../core/core.module';
import { PublicRoutes } from './public.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPostComponent } from './blog/show-post/show-post.component';
import { ListPostComponent } from './blog/list-post/list-post.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    CoreModule,
    PublicRoutes
  ],
  declarations: [ShowPostComponent, ListPostComponent, HomeComponent, NotfoundComponent, LoginComponent, RegisterComponent]
})
export class PublicModule { }
