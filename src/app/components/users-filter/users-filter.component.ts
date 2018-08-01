import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Filter } from '../../models';
import { FormGroup, FormControl } from '@angular/forms';

import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-filter',
  styleUrls: ['./users-filter.component.css'],
  templateUrl: './users-filter.component.html'
})
export class UsersFilterComponent implements OnChanges {
  @Input() filter: Filter;
  @Output() clearFilter = new EventEmitter<any>();
  @Output() setFilter = new EventEmitter<Filter>();

  constructor(private dateParserFormatter: NgbDateParserFormatter) {}

  public filterForm: FormGroup;

  public initForm() {
    this.filterForm = new FormGroup({
      firstName: new FormControl(this.firstNameValue),
      registrationDateStart: new FormControl(this.registrationDateStartValue),
      registrationDateEnd: new FormControl(this.registrationDateEndValue),
    });
  }

  get firstNameValue() {
    if (!this.filter) {
      return null;
    }
    return this.filter.firstName;
  }

  get registrationDateStartValue() {
    if (!this.filter || !this.filter.registrationDateStart) {
      return null;
    }
    return this.dateParserFormatter.parse(this.filter.registrationDateStart.toString());
  }

  get registrationDateEndValue() {
    if (!this.filter || !this.filter.registrationDateEnd) {
      return null;
    }
    return this.dateParserFormatter.parse(this.filter.registrationDateEnd.toString());
  }

  get isButtonsEnabled() {
    return this.filterForm.value.firstName
    || this.filterForm.value.registrationDateStart
    || this.filterForm.value.registrationDateEnd;
  }

  clearFiltersHandler() {
    this.clearFilter.emit();
    this.initForm();
  }

  setFiltersHandler() {
    if (this.filterForm.value.registrationDateStart) {
      const ngbDate = this.filterForm.value.registrationDateStart;
      this.filterForm.value.registrationDateStart = this.dateParserFormatter.format(ngbDate);
    }

    if (this.filterForm.value.registrationDateEnd) {
      const ngbDate = this.filterForm.value.registrationDateEnd;
      this.filterForm.value.registrationDateEnd = this.dateParserFormatter.format(ngbDate);
    }

    this.setFilter.emit(this.filterForm.value);
  }

  ngOnChanges() {
    this.initForm();
  }
}
