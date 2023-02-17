import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
    listchangeEvent: EventEmitter<Post[]> = new EventEmitter();
    ListOfPosts: Post[] = [
        // new Post(
        //   'Nature',
        //   'Earth is the only planet known to support life, and its natural features are the subject of many fields of scientific research. Within the Solar System, it is third closest to the Sun; it is the largest terrestrial planet and the fifth largest overall. Its most prominent climatic features are its two large polar regions, two relatively narrow temperate zones, and a wide equatorial tropical to subtropical region',
        //   '../../assets/img/nature.jpg',
        //   'Postmodern literature',
        //   new Date(),
        //   3
        // ),
        // new Post(
        //   'Hampi',
        //   'Hampi is a historical city located within Karnataka in India. The city was known to be the seat of the Vijayanagara empire which flourished here from the 14th century. Hampi used to be the second-largest mediaeval-era city in the entire world. Even though the old city is in ruins, the beautiful historical remains have been carefully excavated and included in the list of UNESCO World Heritage Sites.',
        //   '../../assets/img/hampi.jpg',
        //   'John M. Fritz',
        //   new Date(),
        //   2
        // ),
        // new Post(
        //   'Araku Valley',
        //   'Home to amazing beaches, enchanting temples, and mesmerizing hill stations, there is no dearth for many explored gems in South India that portray the ancient traditions, and rich cultural heritage. And of all the unexplored and untouched places, Araku Valley in the heart of Andhra Pradesh is undoubtedly a stunner.Yet to be explored to its fullest potential, Araku Valley is one of the most spectacular vacation spots in the state of Andhra Pradesh.',
        //   '../../assets/img/arku_valley.jpg',
        //   'Yalla.vamsi',
        //   new Date(),
        //   6
        // ),
        
      ];

      //display list 
      getPosts(){
        return this.ListOfPosts;
      }

      //delete post 2
      deletePost(index: number) {
        this.ListOfPosts.splice(index,1);
      }

      //add post
      addPost(post: Post) {
        this.ListOfPosts.push(post);
      }

      //update post
      updatePost(index: number, post: Post){
        this.ListOfPosts[index] = post;
      }

      //get post to edit
      getPost(index: number){
        return this.ListOfPosts[index];
      }

      //increase number of likes
      likepost(index:number){
        this.ListOfPosts[index].numberOfLikes += 1;
      }

      //updateing posts coming from back-end
      setPosts(listOfPosts: Post[]){
        this.ListOfPosts = listOfPosts;
        this.listchangeEvent.emit(listOfPosts);
      }
}