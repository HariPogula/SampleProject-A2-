import { EmailValidator } from './../shared/emailValidator';
import { UserService } from './../../services/getuser.service';
import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { User } from './user';
import { CanDeactivate, Router, RouteParams } from 'angular2/router';
@Component({
    templateUrl: '/app/html/newuser.html',
    providers: [UserService]
})
export class NewUserComponent implements OnInit, CanDeactivate {
    form: ControlGroup;
    title: string;
    user = new User();
    routerCanDeactivate() {
        if (this.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    }

    constructor(fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _userservice: UserService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', EmailValidator.checkEmail],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    save() {
        var result;
        if (this.user.id) {
            result = this._userservice.updateUser(this.user)
                .subscribe(x => {
                    this._router.navigate(['User'])
                });

        }
        else
            result = this._userservice.addUser(this.form.value)
                .subscribe(x => {
                    //this.form.markAsPristine();
                    this._router.navigate(['User'])
                });

    }
    ngOnInit() {
        var id = this._routeParams.get("id");
        this.title = id ? "Edit User" : "Create User";
        if (!id) {
            return;
        } 

        this._userservice.getUser(id)
            .subscribe(
            user => this.user = user,
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            }
            );
       
    }


} 		  
