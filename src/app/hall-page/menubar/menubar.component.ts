import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  constructor(private localstorage: LocalStorageService,
    private router: Router) { }
  @Output() componentName = new EventEmitter<String>();
  @Input() navigatePageInput: Number;
  ngOnInit() {
    this.navigatePageInput = 0;
  }

  logout() {
    this.localstorage.remove('x');
    this.router.navigate(['./']);
  }

  changeComponent(nameComponent) {
    if (nameComponent === 'DASHBOARD') {
      this.navigatePageInput = 0;
      this.router.navigate(['./home']);
    } else if (nameComponent === 'USER PROFILE') {
      this.navigatePageInput = 1;
      this.router.navigate(['./home/userprofit']);
    } else if (nameComponent === 'GALLERY') {
      this.navigatePageInput = 2;
    } else if (nameComponent === 'USER ONLINE') {
      this.navigatePageInput = 3;
    } else if (nameComponent === 'MESSAGER') {
      this.navigatePageInput = 4;
    } else if (nameComponent === 'MAPS') {
      this.navigatePageInput = 5;
    } else {
      this.navigatePageInput = 6;
    }
    this.componentName.emit(nameComponent);
  }

}
