System.register(['./../shared/emailValidator', './../../services/getuser.service', 'angular2/core', 'angular2/common', './user', 'angular2/router'], function(exports_1, context_1) {
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
    var emailValidator_1, getuser_service_1, core_1, common_1, user_1, router_1;
    var NewUserComponent;
    return {
        setters:[
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            },
            function (getuser_service_1_1) {
                getuser_service_1 = getuser_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(fb, _router, _routeParams, _userservice) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userservice = _userservice;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', emailValidator_1.EmailValidator.checkEmail],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                NewUserComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                NewUserComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        result = this._userservice.updateUser(this.user)
                            .subscribe(function (x) {
                            _this._router.navigate(['User']);
                        });
                    }
                    else
                        result = this._userservice.addUser(this.form.value)
                            .subscribe(function (x) {
                            //this.form.markAsPristine();
                            _this._router.navigate(['User']);
                        });
                };
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "Create User";
                    if (!id) {
                        return;
                    }
                    this._userservice.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/html/newuser.html',
                        providers: [getuser_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, getuser_service_1.UserService])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=newuser.component.js.map