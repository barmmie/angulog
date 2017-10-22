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
  posts;
  constructor(public postService:PostService, public router:Router, public alert:AlertService) { }

  ngOnInit() {

    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllForUser()
    .subscribe((res) => {
      this.posts = res;
    }, err => {

      const message = 'An error occured while loading posts. Please try again';
      this.alert.error(err.message? err.message:message);
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

    if(! confirm('Irreversible! Are you sure you want to delete thispost.')) {
      return;
    }

    if(!post.id) {
      return;
    }
    this.postService.deletePost(post.id)
    .subscribe(res => {
      this.loadPosts();
    }, err => {
      const message = 'An error occured while deleteing this post.';
      this.alert.error(err.message? err.message:message);
    })
  }

}
