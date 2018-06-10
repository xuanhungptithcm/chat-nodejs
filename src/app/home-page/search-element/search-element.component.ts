import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IuserService } from '../../share/service/iuser.service';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.scss']
})
export class SearchElementComponent implements OnInit {
   changeClass: Number = 1;
   role: Boolean = false;
   roleClass: Boolean = true;
   border: Boolean = false;
   formData = new FormData();
   base64Image: string;
   profit: string;
  constructor(private router: Router,
    private localstorage: LocalStorageService,
    private userService: IuserService) { }

  ngOnInit() {
    this.profit = this.localstorage.get('image');
  }

  changeRole(value) {
    if (value === 1) {
      this.router.navigate(['./home']);
    } if (value === 2) {
      this.router.navigate(['./home/activity']);
    } if (value === 3) {
      this.router.navigate(['./home/notification']);
    }
    this.border = false;
    this.changeClass = value;
  }

  setting() {
    this.role = !this.role;
  }

  logout() {
    this.localstorage.remove('x');
    this.router.navigate(['./']);
  }

  updatePerson() {
    this.border = true;
    this.role = false;
    this.changeClass = 0;
    this.router.navigate(['./home/personal']);
  }

  onFileChange(event) {
    const file: File = event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.base64Image = myReader.result;
      console.log(this.base64Image);
      this.userService.uploadFile({ image: this.base64Image, name: file.name }).subscribe(response => {
        this.profit = response.url;
        this.localstorage.set('image', this.profit);
      });
    };
    myReader.readAsDataURL(file);
  }
}
