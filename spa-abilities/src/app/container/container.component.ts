import { Component, OnInit } from '@angular/core';
import { Outlet } from '../table/outlet.model';
import { AbilityService } from '../api/v1/ability.service';
import { Abilities, Ability } from '../api/v1/ability.model';

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

  private static splitByIntent(abilities: Ability[]): Ability[] {
    return abilities;
  }
  private static mergeByNameAndHostAndPort(abilities: Ability[]): Ability[] {
    const resultMap = new Map<string, Ability>();
    for (const ability of abilities) {
      const index = ContainerComponent.index(ability);
      const found = resultMap.get(index);
      if (!found) {
        resultMap.set(index, ability);
      } else {
        for (const intent of ability.intents) {
          if (!found.intents.includes(intent)) {
            found.intents.push(intent);
          }
        }
        resultMap.set(index, found);
      }
    }
    return Array.from(resultMap.values());
  }

  private static index(ability: Ability): string {
    return `${ability.name}#${ability.host}:${ability.port}`;
  }

  constructor(private service: AbilityService) {
  }

  ngOnInit(): void {
    this.service.getAbilities().subscribe(value => {
      value.config = ContainerComponent.mergeByNameAndHostAndPort(value.config);
      value.database = ContainerComponent.mergeByNameAndHostAndPort(value.database);
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
