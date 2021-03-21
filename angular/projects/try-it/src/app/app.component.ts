import { Component } from '@angular/core';
import { MilobellaResponse } from './milobella-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: MilobellaResponse;

  render(display: string): string {
    return display.replace(/^"(.+)"$/,'$1').replace(/\\r\\n/g, '\r\n');
  }
}
