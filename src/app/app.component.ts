import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  meetings = {
    '2024-11-25': ['Drink Coffe', 'Learn React', 'Sleep'],
    '2024-11-26': ['Drink Coffe', 'Learn Angular', 'Sleep'],
  };
}
