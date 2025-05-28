import { Component, signal } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  styles: [
    `
      button {
        margin: 5px;
        padding: 10px;
      }
      p {
        margin: 5px;
        padding: 10px;
      }
    `,
  ],
})
export class CounterComponent {
  counter = signal<number>(0);

  incrementn = () => {
    if (this.counter() >= 0) {
      this.counter.update((val: number) => val + 1);
    }
  };
  decrement = () => {
    if (this.counter() > 0) {
      this.counter.update((val: number) => val - 1);
    }
  };
  reset = () => {
    this.counter.set(0);
  };
}
