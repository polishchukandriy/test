import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UsersHeaderComponent } from './users-header/users-header.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const components: any = [
  UsersHeaderComponent,
  UsersFilterComponent,
  UsersTableComponent,
  AddUserModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [...components],
  exports: components
})
export class ComponentsModule { }
