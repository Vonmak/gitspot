import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  // $selectedUser: Observable<UserFullProfile>;

  // constructor(private store: Store<{ selectedUser: UserFullProfile }>) {}

  ngOnInit(): void {
    // this.getSelectedUser();
  }

  // getSelectedUser(): void {
  //   this.$selectedUser = this.store.select(
  //     UsersSelectors.geSelectedUserDataState
  //   );
  // }
  // whatLanguageIsMyRepo(language: string): string {
  //   switch (language) {
  //     case 'JavaScript':
  //       return 'JavaScript';

  //     case 'HTML':
  //       return 'HTML';

  //     case 'TypeScript':
  //       return 'TypeScript';

  //     case 'C#':
  //       return 'c-sharp';

  //     default:
  //       return 'other-language';
  //   }
  // }

}
