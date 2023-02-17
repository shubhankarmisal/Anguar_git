import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  ListOfPosts: Post[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.ListOfPosts = this.postService.getPosts();
    this.postService.listchangeEvent.subscribe((listOfPosts:Post[]) => {
      
      this.ListOfPosts = this.postService.getPosts();
      
    })

  }
}
