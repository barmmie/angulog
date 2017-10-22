import { FormsModule } from '@angular/forms';
import { CoreModule } from './../core/core.module';
import { AdminRoutes } from './admin.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { ListPostComponent } from './posts/list-post/list-post.component';
import { ShowPostComponent } from './posts/show-post/show-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    AdminRoutes
  ],
  declarations: [EditPostComponent, CreatePostComponent, ListPostComponent, ShowPostComponent]
})
export class AdminModule { }
