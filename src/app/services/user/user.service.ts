import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!:User;
  private username:string;

  constructor(private http:HttpClient) {
    this.username = 'Vonmak';
   }

  getProfileInfo(){
    interface ApiResponse{
      login:string;
    }
    return this.http.get('https://api.github.com/users/' + this.username)
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
