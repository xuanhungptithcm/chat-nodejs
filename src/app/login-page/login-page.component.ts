import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IuserService } from '../share/service/iuser.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  pass = new FormControl('', [Validators.required]);
  loginForm: FormGroup = this.builder.group({
    email: this.email,
    pass: this.pass
  });
  flag: Boolean = false;
  constructor(private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private localstoage: LocalStorageService,
    private useservice: IuserService,
    private builder: FormBuilder) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
     document.getElementById('emailFocus').focus();
  }

  login() {
    this.useservice.doLogin(this.loginForm.value).subscribe(response => {
      if (response.message) {
        this.toastr.error(response.message);
      } else {
        this.localstoage.add('x', response.token);
        this.router.navigate(['/home2']);
      }
    });
  }

  // getUser() {
  //   this.useservice.getUserByToken().
  //     subscribe(response => {
  //       console.log(response);
  //     });
  // }
}
