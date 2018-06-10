import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private localstorage: LocalStorageService, private router: Router) {
  }

  canActivate() {
    const login = this.localstorage.get('x');
    if (!login) {
      this.router.navigate(['./']);
    }
    return login ? true : false;
  }

}
