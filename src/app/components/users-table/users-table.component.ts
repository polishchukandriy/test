import { Component, Input, EventEmitter, Output } from '@angular/core';

import { User } from '../../models';

@Component({
  selector: 'app-users-table',
  styleUrls: ['./users-table.component.css'],
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent {
  @Input() users: User[];
  @Output() setSortBy = new EventEmitter<string>();

  setSortByHandler(event: any) {
    if (!event.target.attributes['field-name']) {
      return;
    }
    this.setSortBy.emit(event.target.attributes['field-name'].value);
  }
}
