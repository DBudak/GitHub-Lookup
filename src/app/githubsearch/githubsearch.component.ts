import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css'],
  providers: [GithubService]
})
export class GithubsearchComponent implements OnInit {

  user: JSON;
  userlogin: string;
  repos: JSON
  constructor(private _githubService :  GithubService){

    
  }

  ngOnInit() {

  }
  search(){
    console.log("searching");
    this._githubService.getUser(this.userlogin).subscribe(
      user => this.user = user
    );
    this._githubService.getRepos(this.userlogin).subscribe(
      repos => this.repos = repos
    );
  }
}
