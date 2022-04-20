import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';
import { Repository } from '../repo/repository';
import { RepoService } from '../services/repo/repo.service';
import { UserService } from '../services/user/user.service';


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

  constructor(private http:HttpClient, private userService:UserService, private repoService:RepoService) { 
    // console.log('it is ready')
    this.logo= 'assets/images/github-logo.png';
    this.myLogo='assets/images/user-search.png';

    this.username = 'Vonmak';

    this.userService.getProfileInfo().subscribe((user:any)=>{
      this.user=user
    });

    this.repoService.getProfileRepos().subscribe((repos:any) => {
      this.repos = repos;
    });
  }

   findProfile() {
    this.userService.updateProfile(this.username);
    this.repoService.updateProfile(this.username);

    this.userService.getProfileInfo().subscribe((user:any) => {
      this.user = user;
    });

    this.repoService.getProfileRepos().subscribe((repos:any) => {
      this.repos = repos;
    });
  }
    ngOnInit(): void {
      
    }
  
}
