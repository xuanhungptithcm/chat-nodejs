import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { IuserService } from './../../share/service/iuser.service';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { Iuser } from './../../share/entities/iuser';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
   person: Iuser;
   changeElement: Number = 3;

   name: string;
   email: string;
   password: string;
   repassword: string;

  // private groupUpdate: FormGroup = this.builder.group({
  //   name: this.name,
  //   email: this.email,
  //   password: this.password,
  //   repassword: this.repassword
  // });

  constructor(
    private localStroge: LocalStorageService,
    private http: Http,
    private builder: FormBuilder,
    private userService: IuserService,
    private toast: ToastsManager,
    private vrc: ViewContainerRef
  ) {
    this.toast.setRootViewContainerRef(vrc);
  }

  ngOnInit() {
  }

  changeInfomationOfPerson() {
    if (this.changeElement === 1) {
      if (this.name) {
        if (confirm('DO YOU UPDATE NAME ?')) {
          const req = { name: this.name };
          this.userService.updateUser(req).subscribe(
            response => {
              console.log(response);
              alert('UPDATE SUCCESS');
            }
          );
        }
      } else {
        this.toast.error('NAME NOT EMPTY.', 'Up');
      }
    } else if (this.changeElement === 2) {
      if (this.email) {
        if (confirm('DO YOU UPDATE EMAIL ?')) {
          const req = { email: this.email };
          this.userService.updateUser(req).subscribe(
            response => {
              console.log(response.token);
              this.localStroge.set('x', response.token);
            }
          );
        }
      } else {
        this.toast.error('EMAIL NOT EMPTY', 'Up');
      }
    } else {
      if (this.password && this.repassword) {
        if (this.password === this.repassword) {
          if (confirm('DO YOU UPDATE PASSWORD ?')) {
            const req = { password: this.password };
            this.userService.updateUser(req).subscribe(
              response => {
                console.log(response);
                alert('UPDATE SUCCESS');
              }
            );
          } else {
            this.toast.error('REPASSWORD INCORRECT', 'Up');
          }
        }
      } else {
        this.toast.error('EMPTY');
      }
    }
  }
  changeInformation(number) {
    this.changeElement = number;
    if (this.changeElement === 1) {
      this.email = '';
      this.password = '';
      this.repassword = '';
    } else if (this.changeElement === 2) {
      this.name = '';
      this.password = '';
      this.repassword = '';
    } else {
      this.email = '';
      this.name = '';
    }
  }
}
