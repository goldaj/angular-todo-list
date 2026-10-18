import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent as TodosListComponent} from './todos/list/list.component';
import { ProductionGuard } from './shared/production.guard';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [ProductionGuard]
  },
  {
    path: 'todos',
    loadChildren : './todos/todos.module#TodosModule'
  },
  {
    path: '**',
    redirectTo : 'todos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
