import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppToolbarComponent} from "./app-toolbar/app-toolbar.component";
import {AppNavbarComponent} from "./app-navbar/app-navbar.component";
import {AppStudentsComponent} from "./app-students/app-students.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppToolbarComponent, AppNavbarComponent, AppStudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Directivas';
}
