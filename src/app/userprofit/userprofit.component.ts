import { IuserService } from './../share/service/iuser.service';
import { Component, OnInit } from '@angular/core';
import { Iuser } from '../share/entities/iuser';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-userprofit',
  templateUrl: './userprofit.component.html',
  styleUrls: ['./userprofit.component.scss']
})
export class UserprofitComponent implements OnInit {
   user: Iuser;
   profit: string;
   base64Image: string;

  constructor(private userService: IuserService,
    private router: Router,
    private localstorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.userService.getUserByToken()
      .subscribe(response => {
        this.user = response;
        this.profit = this.user.image;
      });
  }
  updateUser() {
    const request = {
      firstname: this.user.firstname,
      password: this.user.password,
      lastname: this.user.lastname,
      country: this.user.country,
      address: this.user.address,
      slogan: this.user.slogan,
      company: this.user.company,
      city: this.user.city
    };
    this.userService.updateUser(request)
      .subscribe(response => {
        if (response) {
          console.log(response);
          this.router.navigate(['./home']);
        }
      });
  }

  changeProfit(event) {
    const file: File = event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.base64Image = myReader.result;
      this.userService.uploadFile({ image: this.base64Image, name: file.name }).subscribe(response => {
        this.profit = response.url;
      });
    };
    myReader.readAsDataURL(file);
  }
}
