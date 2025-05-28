import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../component/greeting/greeting.component';
import { CounterComponent } from '../component/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homemassage = signal('Pass Susccessful(Just get Value from Home)');

  handleInput = (event: KeyboardEvent) => {
    if (event && event.key) {
      console.log(`user pressed the ${event.key}`);
    } else {
      console.log('Event does not have a key property');
    }
  };
}
