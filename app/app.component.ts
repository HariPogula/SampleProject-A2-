


import {Component} from 'angular2/core';
import {RouteConfig,RouterOutlet,RouterLink} from 'angular2/router';

import { FirstComponent } from './components/users/first.component';
import {NavComponent} from './components/shared/nav.component';
import { PostComponent } from './components/posts/post.component';
import { NewUserComponent } from './components/users/newuser.component';
import { NotFoundComponent } from './components/shared/notfound';

@RouteConfig([
  { path: '/user', name: 'User', component: FirstComponent, useAsDefault: true },
  { path: '/post', name: 'Post', component: PostComponent },
  { path: '/user/new', name: 'NewUser', component: NewUserComponent },
  { path: '/user/:id', name: 'EditUser', component: NewUserComponent },
  { path: '/user/notfound', name: 'NotFound', component: NotFoundComponent },
  { path: '*other', name: 'Other', redirectTo: ['User'] }

])
@Component({
    selector: 'my-app',
    template:`
    <nav></nav>`,
      directives:[NavComponent,RouterOutlet,RouterLink]
})
export class AppComponent { }