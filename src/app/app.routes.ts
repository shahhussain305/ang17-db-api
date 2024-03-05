import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'home',component:HomeComponent},
    {path: 'display-data',component:DisplayDataComponent},
    {path: 'about',component:AboutComponent},
    {path: 'login',component:LoginComponent},
    {path:'**',component:ErrorComponent}
];
