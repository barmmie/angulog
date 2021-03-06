import { AlertService } from './../../../core/services/alert.service';
import { Router } from '@angular/router';
import { PostService } from './../../../core/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts:any[];
  constructor(public postService:PostService, public router:Router, public alert:AlertService) { }

  ngOnInit() {

    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAll()
    .subscribe((res) => {
      // this.posts = res;
    }, err => {
      this.alert.error('An error occured while loading posts. Please try again');
    })
  }

  viewPost(post) {
    if(!post.id) {
      return;
    }

    this.router.navigate(['admin/posts',post.id]);
  }

  editPost(post) {

    if(!post.id) {
      return;
    }

    this.router.navigate(['admin/posts',post.id, 'edit']);
    
  }

  deletePost(post, idx) {

    if(!post.id) {
      return;
    }
    this.postService.deletePost(post.id)
    .subscribe(res => {
      this.loadPosts();
    }, err => {
      this.alert.error('An error occured while deleteing this post.');
    })
  }

}

