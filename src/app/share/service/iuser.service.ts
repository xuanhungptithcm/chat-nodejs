import { Configs } from './../../iconfig';
import { TokenService } from './token.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../entities/iuser';
import 'rxjs/add/operator/map';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class IuserService {

  constructor(private http: Http,
    private tokenService: TokenService) { }

  doRegister(user: any): Observable<any> {
    const url = Configs.USER.register;
    return this.http.post(url, user).map(response => {
      return response.json();
    });
  }

  doLogin(user: any): Observable<any> {
    const url = Configs.USER.login;
    return this.http.post(url, user).map(respnse => {
      return respnse.json();
    });
  }

  getUserByToken(): Observable<any> {
    const url = Configs.USER.token;
    return this.http.get(url, this.tokenService.addTokenInHeader()).map(response => {
      return response.json();
    });
  }

  updateUser(user: any): Observable<any> {
    const url = Configs.USER.update;
    return new Observable((token: Subscriber<any>) => {
      this.getUserByToken().subscribe(response => {
        const id = response._id;
        this.http.put(url + '/' + id, user).subscribe(result => {
          token.next(result.json());
        });
      });
    });
  }

  uploadFile(formData: any): Observable<any> {
    const url = Configs.USER.uploadfile;
    return new Observable((image: Subscriber<any>) => {
      this.getUserByToken().subscribe(response => {
        const id = response._id;
        this.http.put(url + '/' + id,
          formData, this.tokenService.addTokenInHeader()).subscribe(result => {
            image.next(result.json());
          });
      });
    });
  }
}
