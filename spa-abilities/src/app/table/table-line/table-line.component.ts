import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { OutletPair } from '../outlet.model';
import { Ability } from '../../api/v1/ability.model';

@Component({
  selector: 'abilities-table-line',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.scss']
})
export class TableLineComponent implements OnInit {

  @Input()
  public highlighted = false;

  @Input()
  public ability: Ability;

  @Output()
  public poi: EventEmitter<OutletPair> = new EventEmitter<OutletPair>();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.emitPoi();
  }

  @HostListener('window:resize')
  public resize(): void {
    this.emitPoi();
  }

  private emitPoi(): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2.0,
      y: rect.top + rect.height / 2.0,
    };
    this.poi.next({
      left: {x: rect.left + 20, y: center.y},
      right: {x: rect.left + rect.width - 20, y: center.y},
    } as OutletPair);
  }
}
