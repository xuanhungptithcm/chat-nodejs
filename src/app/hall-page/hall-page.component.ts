import { SubjectService } from './../share/service/subject.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { IuserService } from '../share/service/iuser.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-hall-page',
  templateUrl: './hall-page.component.html',
  styleUrls: ['./hall-page.component.scss']
})
export class HallPageComponent implements OnInit, OnDestroy {
  nameComponent: String = 'DASHBOARD';
  keySearch: string;
  subscribers: Subscription[] = [];
  search$ = new Subject<string>();
  constructor(private localstorage: LocalStorageService,
    private router: Router,
    private userSevice: IuserService,
    private subjectService: SubjectService) { }
    navigatePage: Number;
  ngOnInit() {
    this.subscribers.push(this.search$ // cu co su kien la no se them vao
      .debounceTime(275)
      .distinctUntilChanged()
      .subscribe((searchTerm) => {
        this.router.navigate(['./home']);
        this.navigatePage = 0;
        this.keySearch = searchTerm;
        if (this.keySearch === '') {
          this.keySearch = null;
        }
        this.findUser(this.keySearch);
      })
    );

  }

  ngOnDestroy() {
    this.subscribers.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  logout() {
    this.localstorage.remove('x');
    this.localstorage.remove('image');
    this.router.navigate(['./']);
  }

  getNameComponent(value) {
    this.nameComponent = value;
  }
  searchHandle(event) {
    this.search$.next(event.target.value);
  }
  findUser(textSearch: string) {
    this.userSevice.searchUserArray(textSearch)
      .subscribe(userArray => {
        if (userArray) {
          this.subjectService.reciveEvent(userArray.result);

        }
      });
  }

}
