import { ActivatedRoute } from '@angular/router';
import { AlertService } from './../../../core/services/alert.service';
import { PostService } from './../../../core/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  

  post:any = {};
  constructor(public postService:PostService, public alertService:AlertService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadPost(params['slug']);
    
    })
  }

  loadPost(slug)  {
    this.postService.getBySlug(slug)
    .subscribe(res => {
      this.post = res;

    }, err => {
      this.alertService.error('Error occured while loading post')
    }) 

  }


  

}
