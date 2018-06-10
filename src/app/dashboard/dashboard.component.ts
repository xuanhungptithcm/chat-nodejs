import { Iuser } from './../share/entities/iuser';
import { SubjectService } from './../share/service/subject.service';
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../share/service/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userArray: Iuser[] = [];
  constructor(private subjectService: SubjectService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.subjectService.subject.subscribe(userArray => {
      this.userArray = userArray;
    });
  }
  makeFriend(id) {
    this.socketService.send('make friend', id);
  }
}
