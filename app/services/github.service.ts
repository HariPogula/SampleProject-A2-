import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService
{
  private _baseurl="http://localhost:61596/api/App1/";
  constructor(private _http:Http){}
  getUser(username)
  {
     return this._http.get(this._baseurl+username)
               .map(res=>res.json());
  }
  //getFollowers(username)
  //{
  //   return  this._http.get(this._baseurl+username+"/followers")
  //                .map(res=>res.json());
  //}
}