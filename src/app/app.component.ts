import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { MenuTopComponent } from './inc/menu-top/menu-top.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
          RouterOutlet,
          HomeComponent,
          HeaderComponent,
          FooterComponent,
          MenuTopComponent,
          DisplayDataComponent
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-app';
}
