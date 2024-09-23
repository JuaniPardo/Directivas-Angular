import { Component } from '@angular/core';
import {CurrencyPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-app-students',
  standalone: true,
  imports: [
    NgClass,
    CurrencyPipe
  ],
  templateUrl: './app-students.component.html',
  styleUrl: './app-students.component.scss'
})
export class AppStudentsComponent {
  redText: boolean = true;
  ammount: number = 1000;

}
