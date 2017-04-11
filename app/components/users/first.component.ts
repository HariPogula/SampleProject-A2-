import { UserService } from './../../services/getuser.service';
import {Component,OnInit} from 'angular2/core';
import { RouterLink } from 'angular2/router';
@Component({
selector:'first',
templateUrl:'/app/html/user.html',
providers:[UserService],
directives:[RouterLink]
})
export class FirstComponent implements OnInit
{
 users_s:any[];
 constructor(private _userservice:UserService)
 {

 }
ngOnInit()
{
   this._userservice.getUsers()
        .subscribe(users=>this.users_s=users);
}
}