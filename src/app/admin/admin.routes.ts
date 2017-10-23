import { AuthGuard } from './../core/guards/auth.guard';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { ShowPostComponent } from './posts/show-post/show-post.component';
import { ListPostComponent } from './posts/list-post/list-post.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const adminRoutes: Routes = [
    { path: 'admin',
      children: [
        { path: 'posts', component: ListPostComponent, canActivate: [AuthGuard] },
        { path: 'posts/create', component: CreatePostComponent, canActivate: [AuthGuard] },        
        { path: 'posts/:id', component: ShowPostComponent, canActivate: [AuthGuard] },
        { path: 'posts/:id/edit', component: EditPostComponent, canActivate: [AuthGuard] },
        
    ]
    }
  ];
  
  export const AdminRoutes = RouterModule.forChild(adminRoutes);