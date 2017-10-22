import { ActivatedRoute,  } from '@angular/router';
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
  constructor(public postService:PostService, public alertService:AlertService, public route:ActivatedRoute, public location: Location) { }

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

  goBack() {
    this.location.back()
  }

}
