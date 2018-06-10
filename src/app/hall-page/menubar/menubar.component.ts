import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  activeClassCss: Number = 0;
  constructor(private localstorage: LocalStorageService,
    private router: Router) { }
  @Output() componentName = new EventEmitter<String>();
  ngOnInit() {
  }

  logout() {
    this.localstorage.remove('x');
    this.router.navigate(['./']);
  }

  changeComponent(nameComponent) {
    if (nameComponent === 'DASHBOARD') {
      this.activeClassCss = 0;
      this.router.navigate(['./home2']);
    } else if (nameComponent === 'USER PROFILE') {
      this.activeClassCss = 1;
      this.router.navigate(['./home2/userprofit']);
    } else if (nameComponent === 'GALLERY') {
      this.activeClassCss = 2;
    } else if (nameComponent === 'USER ONLINE') {
      this.activeClassCss = 3;
    } else if (nameComponent === 'MESSAGER') {
      this.activeClassCss = 4;
    } else if (nameComponent === 'MAPS') {
      this.activeClassCss = 5;
    } else {
      this.activeClassCss = 6;
    }
    this.componentName.emit(nameComponent);
  }
}
