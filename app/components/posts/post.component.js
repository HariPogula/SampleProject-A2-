System.register(['./../../services/post.service', './../shared/spinner.component', './../../services/getuser.service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var post_service_1, spinner_component_1, getuser_service_1, core_1;
    var PostComponent;
    return {
        setters:[
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (getuser_service_1_1) {
                getuser_service_1 = getuser_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            {
                getuser_service_1.UserService;
            }
            PostComponent = (function () {
                function PostComponent(_postservice, _userservice) {
                    this._postservice = _postservice;
                    this._userservice = _userservice;
                    this.posts = [];
                    this.users = [];
                }
                PostComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userservice.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postservice.getPosts(filter)
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.postsLoading = false; });
                };
                PostComponent.prototype.reloadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostComponent.prototype.select = function (posts) {
                    var _this = this;
                    this.currentPost = posts;
                    this.commentsLoading = true;
                    this._postservice.getComments(posts.id)
                        .subscribe(function (comments) {
                        return _this.currentPost.comments = comments;
                    }, null, function () { return _this.commentsLoading = false; });
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        templateUrl: '/app/html/post.html',
                        providers: [post_service_1.PostService, getuser_service_1.UserService],
                        directives: [spinner_component_1.SpinnerComponent],
                        styles: ["\n         .posts li { cursor: default; }\n         .posts li:hover { background: #ecf0f1; } \n         .list-group-item.active, \n         .list-group-item.active:hover, \n         .list-group-item.active:focus { \n             background-color: #ecf0f1;\n             border-color: #ecf0f1; \n             color: #2c3e50;\n             .clickable{\n                 cursor:pointer;\n             }\n             .thumbnail {\n     border-radius: 100%;\n         }\n     "],
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, getuser_service_1.UserService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map