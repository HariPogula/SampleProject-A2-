import { PostService } from './../../services/post.service';
import { SpinnerComponent } from './../shared/spinner.component';
import { UserService } from './../../services/getuser.service';
import { Component, OnInit } from 'angular2/core';
{UserService}
@Component({
    selector: 'post',
    templateUrl: '/app/html/post.html',
    providers: [PostService, UserService],
    directives: [SpinnerComponent],
    styles: [`
         .posts li { cursor: default; }
         .posts li:hover { background: #ecf0f1; } 
         .list-group-item.active, 
         .list-group-item.active:hover, 
         .list-group-item.active:focus { 
             background-color: #ecf0f1;
             border-color: #ecf0f1; 
             color: #2c3e50;
             .clickable{
                 cursor:pointer;
             }
             .thumbnail {
     border-radius: 100%;
         }
     `],
})
export class PostComponent implements OnInit {
    posts = [];
    users = [];
    postsLoading;
    commentsLoading;
    currentPost;
    constructor(
        private _postservice: PostService,
        private _userservice: UserService
    ) {

    }
    ngOnInit() {
        this.loadUsers();
        this.loadPosts();

    }
    private loadUsers() {
        this._userservice.getUsers()
            .subscribe(users => this.users = users);
    }
    private loadPosts(filter?) {
        this.postsLoading = true;
        this._postservice.getPosts(filter)
            .subscribe(posts => this.posts = posts,
            null,
            () => { this.postsLoading = false; });
    }

    reloadPosts(filter) {
        this.currentPost = null;
        this.loadPosts(filter);
    }


    select(posts) {
        this.currentPost = posts;
        this.commentsLoading = true;
        this._postservice.getComments(posts.id)
            .subscribe(comments =>
                this.currentPost.comments = comments, null,
            () => this.commentsLoading = false);
    }



}