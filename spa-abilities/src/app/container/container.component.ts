import { Component, OnInit } from '@angular/core';
import { Outlet } from '../model/outlet.model';

@Component({
  selector: 'abilities-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public abilities: { cache: object[], database: object[], config: object[] } = {
    cache: [{name: 'cinema', intents: ['LAST_SHOWTIME'], host: 'localhost', port: 10200}],
    database: [{name: 'cinema', intents: ['LAST_SHOWTIME'], host: 'localhost', port: 10200}],
    config: [{name: 'cinema', intents: ['LAST_SHOWTIME'], host: 'localhost', port: 10200}],
  };

  public links: { from: Outlet, to: Outlet }[] = [
    {
      from: {x: 0, y: 0},
      to: {x: 100, y: 100}
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  setFromLink($event: Outlet): void {
    this.links[0] = {from: $event, to: this.links[0].to};
  }

  setToLink($event: Outlet): void {
    this.links[0] = {from: this.links[0].from, to: $event};
  }
}
