import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar) { }

  displayMessage(message: string, action = 'Ok') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
