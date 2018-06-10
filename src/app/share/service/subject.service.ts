import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectService {
  subject = new Subject<any>();
  constructor() { }

  reciveEvent(eventValue) {
    this.subject.next(eventValue);
  }
}
