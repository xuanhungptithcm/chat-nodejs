import { Configs } from './../../iconfig';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as socketIoClient from 'socket.io-client';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class SocketService {
  private io: SocketIOClient.Socket;
  constructor() {
    this.io = socketIoClient.connect(Configs.SOCKET.url);
  }

  public send(eventName: string, payload: any) {
    this.io.emit(eventName, payload);
  }

  public receive<T>(eventName: string): Observable<T> {
    return new Observable((sub: Subscriber<T>) => {
      const eventHandler = (payload: any) => {
        sub.next(payload);
      };
      this.io.on(eventName, eventHandler);
      return () => { this.io.removeEventListener(eventName, eventHandler); };
    });
  }
}
