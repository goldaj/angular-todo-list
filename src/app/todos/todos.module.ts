import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTableModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    path: ':id/edit',
    component : EditComponent
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
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    ],
  exports: [
    ListComponent
  ]
})
export class TodosModule { }
