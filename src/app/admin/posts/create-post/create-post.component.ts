import { AlertService } from './../../../core/services/alert.service';
import { PostService } from './../../../core/services/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  ngOnInit(): void {
  }

  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private postService: PostService,
      private alertService: AlertService) { }

  save() {
      this.loading = true;
      this.postService.create(this.model)
          .subscribe(
              data => {
                  this.alertService.success('Post created successful', true);
                  this.router.navigate(['/admin/posts']);
                  this.loading = false;
              },
              err => {

                const error = err.error || err
                  const message = 'An error occured while saving this post';
                  this.alertService.error(error.message ? error.message : message);
                  this.loading = false;
              });
  }

}
