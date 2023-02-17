import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { Post } from "./post.model";
import { PostService } from "./post.service";

// database path
// https://live-posts-30b98-default-rtdb.firebaseio.com


@Injectable({providedIn:'root'})
export class BackEndService{

    constructor(private postService: PostService, private http: HttpClient){}
    //fun 1- to Save
    saveData(){
        //step 1 - get list of post from post.service file
        const listOfPosts: Post[] = this.postService.getPosts(); 

        //step 2 - send list of post to back-end
        this.http.put('https://live-posts-30b98-default-rtdb.firebaseio.com/posts.json', listOfPosts)
        .subscribe((res)=>{
            console.log(res);
            
        });
    }

    //fun 2- to Fetch
    fetchData(){
        // step 1 - Get data from back-end
        this.http.get<Post[]>('https://live-posts-30b98-default-rtdb.firebaseio.com/posts.json')
        .pipe(tap((listOfPosts: Post[]) => {
            console.log(listOfPosts);

            //send data to post.service
            this.postService.setPosts(listOfPosts); 
            
        })).subscribe()
    }
}