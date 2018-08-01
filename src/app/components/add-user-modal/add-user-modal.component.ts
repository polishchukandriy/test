import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NewUser } from '../../models';

@Component({
  selector: 'app-add-user-modal',
  styleUrls: ['./add-user-modal.component.css'],
  templateUrl: './add-user-modal.component.html'
})
export class AddUserModalComponent implements OnInit {
  @Output() add = new EventEmitter<NewUser>();
  @Output() close = new EventEmitter<any>();

  public newUserForm: FormGroup;

  public initForm() {
    this.newUserForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      company: new FormControl(''),
      email: new FormControl(''),
    });
  }

  public addHandler() {
    this.add.emit(this.newUserForm.value);
  }

  public closeHandler() {
    this.close.emit();
  }

  ngOnInit() {
    this.initForm();
  }
}
