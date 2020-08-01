import { Component, OnInit } from '@angular/core';
import { Outlet } from '../table/outlet.model';
import { AbilityService } from '../api/v1/ability.service';
import { Abilities } from '../api/v1/ability.model';

@Component({
  selector: 'abilities-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public abilities: Abilities;

  public links: { from: Outlet, to: Outlet }[] = [
    {
      from: {x: 0, y: 0},
      to: {x: 100, y: 100}
    },
  ];

  constructor(private service: AbilityService) {
  }

  ngOnInit(): void {
    this.service.getAbilities().subscribe(value => {
      this.abilities = value;
    }, error => {
      // console.log(error);
      // alert(error);
    });
  }

  setFromLink($event: Outlet): void {
    this.links[0] = {from: $event, to: this.links[0].to};
  }

  setToLink($event: Outlet): void {
    this.links[0] = {from: this.links[0].from, to: $event};
  }
}
