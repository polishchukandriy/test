import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from '../pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },

  { path: 'admin', component: AdminPageComponent },

  { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
