import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl: string;

  constructor(resource: string) {
    this.apiUrl = `${environment.apiUrl}/${resource}`;
  }
}
