import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { ToastsManager } from 'ng2-toastr';
import { IuserService } from '../share/service/iuser.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  firstname = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  lastname = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  city = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  company = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  slogan = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  address = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  country = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  registerGroup: FormGroup = this.builder.group({
    firstname: this.firstname,
    email: this.email,
    password: this.password,
    lastname: this.lastname,
    country: this.country,
    address: this.address,
    slogan: this.slogan,
    company: this.company,
    city: this.city
  });

  constructor(private builder: FormBuilder,
    private http: Http,
    private router: Router,
    private localstoage: LocalStorageService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private userService: IuserService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  doRegister() {
    this.userService.doRegister(this.registerGroup.value).subscribe(response => {
      if (response.message) {
        this.toastr.error(response.message, 'Opp!');
      } else {
        this.localstoage.set('x', response.token);
        this.router.navigate(['/home']);
      }
    });
  }

  returnLogin() {
    this.router.navigate(['./']);
  }
}
