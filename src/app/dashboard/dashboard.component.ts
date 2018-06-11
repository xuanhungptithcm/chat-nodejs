import { Iuser } from './../share/entities/iuser';
import { SubjectService } from './../share/service/subject.service';
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../share/service/socket.service';
import { IuserService } from '../share/service/iuser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userArray: Iuser[] = [];
  constructor(private subjectService: SubjectService,
    private socketService: SocketService,
    private userSevice: IuserService
  ) { }

  ngOnInit() {
    this.subjectService.subject.subscribe(userArray => {
      this.userArray = userArray;
    });
    this.socketService.receive<any>('wait_to_accept')
      .subscribe(response => {
        console.log(response);
      });
  }
  makeFriend(id) {
    this.userSevice.getUserByToken().subscribe(response => {
      console.log(response._id);
      const request = {
        sendRequestMakeFriendId: response._id,
        idNeedMakeFriend: id
      };
      this.socketService.send('make friend', request);
    });
  }
}
