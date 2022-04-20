import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
// import { User } from 'src/app/user/user';
// import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  username:string;

  constructor(private http:HttpClient) {
    this.username = 'Vonmak';
   }
  getProfileRepos(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
