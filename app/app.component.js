System.register(['angular2/core', 'angular2/router', './components/users/first.component', './components/shared/nav.component', './components/posts/post.component', './components/users/newuser.component', './components/shared/notfound'], function(exports_1, context_1) {
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
    var core_1, router_1, first_component_1, nav_component_1, post_component_1, newuser_component_1, notfound_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (first_component_1_1) {
                first_component_1 = first_component_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (newuser_component_1_1) {
                newuser_component_1 = newuser_component_1_1;
            },
            function (notfound_1_1) {
                notfound_1 = notfound_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/user', name: 'User', component: first_component_1.FirstComponent, useAsDefault: true },
                        { path: '/post', name: 'Post', component: post_component_1.PostComponent },
                        { path: '/user/new', name: 'NewUser', component: newuser_component_1.NewUserComponent },
                        { path: '/user/:id', name: 'EditUser', component: newuser_component_1.NewUserComponent },
                        { path: '/user/notfound', name: 'NotFound', component: notfound_1.NotFoundComponent },
                        { path: '*other', name: 'Other', redirectTo: ['User'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav></nav>",
                        directives: [nav_component_1.NavComponent, router_1.RouterOutlet, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map