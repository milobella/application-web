import {Component, EventEmitter, Output} from '@angular/core';
import {MilobellaRequest} from '../milobella-request';
import {MilobellaService} from '../milobella.service';
import {MilobellaResponse} from '../milobella-response';

@Component({
  selector: 'app-milobella-form',
  templateUrl: './milobella-form.component.html',
  styleUrls: ['./milobella-form.component.css']
})
export class MilobellaFormComponent {

  @Output() answer: EventEmitter<string> = new EventEmitter();

  question = '';

  constructor(private milobellaService: MilobellaService) {}

  onSubmit() {
    this.milobellaService.invoke(new MilobellaRequest(this.question))
      .subscribe((data: MilobellaResponse) => this.answer.emit(data.vocal));
  }

}
