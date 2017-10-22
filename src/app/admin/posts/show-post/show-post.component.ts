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
      this.loadPost(params['id']);
    
    })
  }

  loadPost(id)  {
    this.postService.getById(id)
    .subscribe(res => {
      this.post = res;

    },  err => {
      
      const error = err.error || err
      const message = 'Error occured while loading post'
      this.alertService.error(error.message ? error.message : message)
    }) 

  }


  

}
