import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall-page',
  templateUrl: './hall-page.component.html',
  styleUrls: ['./hall-page.component.scss']
})
export class HallPageComponent implements OnInit {
  nameComponent: String = 'DASHBOARD';
  constructor(private localstorage: LocalStorageService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.localstorage.remove('x');
    this.router.navigate(['./']);
  }

  getNameComponent(value) {
    this.nameComponent = value;
  }

}
