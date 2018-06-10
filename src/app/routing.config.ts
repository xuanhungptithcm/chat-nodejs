import { DashboardComponent } from './dashboard/dashboard.component';
import { HallPageComponent } from './hall-page/hall-page.component';
import { PersonalComponent } from './home-page/personal/personal.component';
import { Router, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginService } from './share/service/login.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchContentElementComponent } from './home-page/search-content-element/search-content-element.component';
import { NotificationElementComponent } from './home-page/notification-element/notification-element.component';
import { UserprofitComponent } from './userprofit/userprofit.component';

const APP_ROUTER =
    [
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: 'login', component: LoginPageComponent
        },
        {
            path: 'register', component: RegisterPageComponent
        },
        {
            canActivate: [LoginService],
            path: 'home', component: HomePageComponent, children: [
                { path: '', component: SearchContentElementComponent },
                { path: 'notification', component: NotificationElementComponent },
                { path: 'personal', component: PersonalComponent }
            ]
        },
        {
            canActivate: [LoginService],
            path: 'home2', component: HallPageComponent, children: [
                { path: '', component: DashboardComponent },
                { path: 'userprofit', component: UserprofitComponent }
            ]
        }
    ];

export const routing = RouterModule.forRoot(APP_ROUTER);
