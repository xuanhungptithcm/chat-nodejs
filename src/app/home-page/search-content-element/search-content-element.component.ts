import { IuserService } from './../../share/service/iuser.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Component({
  selector: 'app-search-content-element',
  templateUrl: './search-content-element.component.html',
  styleUrls: ['./search-content-element.component.scss']
})
export class SearchContentElementComponent implements OnInit {
   base64Image: string;
   profit: string;
  constructor(private userService: IuserService, private localstorage: LocalStorageService) { }

  ngOnInit() {
    this.profit = this.localstorage.get('image');
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
