import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowPostComponent } from './blog/show-post/show-post.component';
import { ListPostComponent } from './blog/list-post/list-post.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from "@angular/router";

const publicRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'blog', component: ListPostComponent },
    { path: 'blog/:slug', component: ShowPostComponent },
    { path: 'notfound', component: NotfoundComponent }
    

];
  
  export const PublicRoutes = RouterModule.forRoot(publicRoutes, { 
    useHash: true
  });