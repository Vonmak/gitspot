import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  // searchName:string;
  @Output() searchOutput = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  search(){
    // this.searchOutput.emit(this.searchName);
    // this.searchName = "";
  }

  // async function searchUser(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   if (username !== '') {
  //     try {
  //       const { data } = await api.get(`${username}`).then()

  //       dispatch({ type: 'UPDATE_USER', payload: data })
  //       history.push('/user')
  //     } catch (error) {
  //       setUsername('')
  //       alert('Erro ao encontrar usuário!')
  //     }
  //   }
  //   return
  // }

}
