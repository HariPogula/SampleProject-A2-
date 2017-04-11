
import {Component} from 'angular2/core';
import {RouteConfig,RouterOutlet,RouterLink,RouteParams,Router} from 'angular2/router';


@Component({
selector:'nav',
templateUrl:'/app/html/nav.html',
directives:[RouterOutlet,RouterLink]
})


export class NavComponent
{
// constructor(private _router: Router){
//      }
     
//      isCurrentRoute(route){
//          var instruction = this._router.generate(route);
//          return this._router.isRouteActive(instruction);
//      }
}

