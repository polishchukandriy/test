import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components';

import { AdminPageComponent } from './admin-page/admin-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const pages: any = [
  AdminPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ComponentsModule,
  ],
  declarations: [...pages],
  exports: pages
})
export class PagesModule { }
