import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { AccountListComponent } from './owner-details/account-list/account-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent },
      { path: 'details/:id', component: OwnerDetailsComponent },
      { path: 'create', component: OwnerCreateComponent}
    ])
  ],
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    AccountListComponent,
    OwnerCreateComponent
  ]
})
export class OwnerModule { }
