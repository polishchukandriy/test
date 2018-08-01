import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-header',
  styleUrls: ['./users-header.component.css'],
  templateUrl: './users-header.component.html'
})
export class UsersHeaderComponent {

  @Output() addUser = new EventEmitter<any>();

  public addUserhandler() {
    this.addUser.emit();
  }
}
