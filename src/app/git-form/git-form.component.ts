import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';
import { Repository } from '../repo/repository';


  @Component({
    selector: 'app-git-form',
    templateUrl: './git-form.component.html',
    styleUrls: ['./git-form.component.css']
  })
  export class GitFormComponent implements OnInit {

  user!:User;
  repos:any[];
  username: string;
  logo:string;
  myLogo:string;

  constructor(private http:HttpClient) { 
    // console.log('it is ready')
    this.logo= 'assets/images/github-logo.png';
    this.myLogo='assets/images/user-search.png';

    this.username = 'Vonmak';

    this.getProfileInfo().subscribe((user:any)=>{
      this.user=user
    });

    this.getProfileRepos().subscribe((repos:any) => {
      this.repos = repos;
    });
  }

  getProfileInfo(){
    interface ApiResponse{
      login:string;
    }
    return this.http.get('https://api.github.com/users/' + this.username)
  }

  getProfileRepos(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
  }

  updateProfile(username: string) {
    this.username = username;
  }

   findProfile() {
    this.updateProfile(this.username);

    this.getProfileInfo().subscribe((user:any) => {
      this.user = user;
    });

    this.getProfileRepos().subscribe((repos:any) => {
      this.repos = repos;
    });
  }
    ngOnInit(): void {
      
    }
  
}
