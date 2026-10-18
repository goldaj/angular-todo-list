import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component : ListComponent
  },
  {
    path: 'create',
    component : EditComponent
  },
  {
    path: ':id/details',
    component : DetailsComponent
  },
  {
    path: ':id/details/:type',
    component : DetailsComponent
  },
  {
    path: '**',
    redirectTo : 'list'
  },

];

@NgModule({
  declarations: [ListComponent, EditComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
