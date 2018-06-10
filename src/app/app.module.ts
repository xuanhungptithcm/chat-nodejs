import { SubjectService } from './share/service/subject.service';
import { LoginService } from './share/service/login.service';
import { TokenService } from './share/service/token.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IuserService } from './share/service/iuser.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SocketService } from './share/service/socket.service';
import { routing } from './routing.config';
import { HallPageComponent } from './hall-page/hall-page.component';
import { MenubarComponent } from './hall-page/menubar/menubar.component';
import { UserprofitComponent } from './userprofit/userprofit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HallPageComponent,
    MenubarComponent,
    UserprofitComponent,
    DashboardComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    FormsModule,
    ToastModule.forRoot(),
    ReactiveFormsModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, IuserService, TokenService, LoginService, SocketService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
