import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatButtonModule, MatSnackBarModule} from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }

