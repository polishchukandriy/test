import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { UsersStore } from '../../store';
import { User, NewUser, Filter } from '../../models';
import { Resources } from '../../resources/resources';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit, OnDestroy {
  public currentPage = 1;
  Resources = Resources;

  public usersSubscription: Subscription;
  public users: User[] = [];

  public pagesCountSubscription: Subscription;
  public pagesCount: number;

  public filterSubscription: Subscription;
  public filter: Filter;

  public currentModalRef: NgbModalRef;

  constructor(
    private readonly modalService: NgbModal,
    private store: UsersStore) {
    this.usersSubscription = this.store.users.subscribe(
      users => this.users = users
    );
    this.pagesCountSubscription = this.store.pagesCount.subscribe(
      pagesCount => this.pagesCount = pagesCount
    );
    this.filterSubscription = this.store.filter.subscribe(
      filter => this.filter = filter
    );
  }

  changePageHandler(pageNumber: number) {
    this.store.doChangePage(pageNumber);
  }

  addUserHandler(newUserModel: NewUser) {
    const userToCreate = new User(newUserModel.firstName,
      newUserModel.lastName,
      newUserModel.company,
      newUserModel.email);
    this.store.doCreateUser(userToCreate);
    this.closeModalHandler();
  }

  clearFilterHandler() {
    this.store.doClearFilter();
  }

  setFilterHandler(filter: Filter) {
    this.store.doSetFilter(filter);
  }

  setSortByHandler(field: string) {
    this.store.doSetSortBy(field);
  }

  openModalHandler(modal: any) {
    this.currentModalRef = this.modalService.open(modal, { centered: true });
  }

  closeModalHandler() {
    if (!this.currentModalRef) {
      return;
    }
    this.currentModalRef.close();
  }

  get isTableNeedToDisplay() {
    return this.users.length > 0;
  }

  get isPaginationNeedToDisplay() {
    return this.pagesCount > 1;
  }

  ngOnInit() {
    this.store.loadUsers();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
    this.pagesCountSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }
}
