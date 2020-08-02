import { Component } from '@angular/core';
import { MilobellaResponse } from './milobella-response';

@Component({
  selector: 'app-try-it-root',
  templateUrl: './app-try-it.component.html',
  styleUrls: ['./app-try-it.component.css']
})
export class AppTryItComponent {
  answer: MilobellaResponse;

  render(display: string): string {
    return display.replace(/"/, '').replace(/"\s+$/, '').replace(/\\r\\n/g, '\r\n');
  }
}
