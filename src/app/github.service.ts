import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private client_id="ed57646d4ab005347614";
  private client_secret="96aaa4e6087078032309d15709a5f8301abb5faf";

  constructor(private _http:Http) { 

  }

  getUser(username:string){
    return this._http.get(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }
  getRepos(username:string){
    console.log(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    return this._http.get(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res=> res.json());
  }
}
