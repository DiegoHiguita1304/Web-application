// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  duration: number = 1000;
  message: string = 'Hola';

  durationChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration = input.valueAsNumber;
  }

  messageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message = input.value;
  }
}
