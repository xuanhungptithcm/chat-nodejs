import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private localstoage: LocalStorageService,
    private router: Router) {
  }
  ngOnInit() {
    const login = this.localstoage.get('x');
    if (login) {
      this.router.navigate(['./home']);
    }
  }
}
