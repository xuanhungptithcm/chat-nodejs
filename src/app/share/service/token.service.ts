import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class TokenService {

  constructor(private localstoger: LocalStorageService) { }

  addTokenInHeader() {
    const headers = new Headers();
    const token = this.localstoger.get('x') as string;
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', token);
    const option = new RequestOptions({ headers: headers });
    return option;
  }
}
