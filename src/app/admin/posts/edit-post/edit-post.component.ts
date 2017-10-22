import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from './../../../core/services/alert.service';
import { PostService } from './../../../core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post:any = {};
  loading = false;
  constructor(public postService:PostService, public alertService:AlertService, 
    public route:ActivatedRoute, public location: Location, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadPost(params['id']);
    
    })
  }

  loadPost(id)  {
    this.postService.getById(id)
    .subscribe(res => {
      this.post = res;

    }, err => {
      this.alertService.error('Error occured while loading post')
    }) 

  }

  update()  {
    this.loading = true;
    this.postService.update(this.post.id, this.post)
    .subscribe(res => {
      this.loading= false;
      this.alertService.info('Post updated successfully');
      this.router.navigate(['admin/posts']);
    }, err => {
      this.loading = false;
      this.alertService.error(`Error occured: ${err}`)
    })
  }


  goBack() {
    this.location.back()
  }

}
