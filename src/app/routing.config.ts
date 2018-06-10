import { DashboardComponent } from './dashboard/dashboard.component';
import { HallPageComponent } from './hall-page/hall-page.component';
import { Router, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginService } from './share/service/login.service';
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
            path: 'home', component: HallPageComponent, children: [
                { path: '', component: DashboardComponent },
                { path: 'userprofit', component: UserprofitComponent }
            ]
        }
    ];

export const routing = RouterModule.forRoot(APP_ROUTER);
