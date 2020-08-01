import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { OutletPair } from './outlet.model';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { Ability } from '../api/v1/ability.model';

@Component({
  selector: 'abilities-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  set data(data: Ability[]) {
    this._data = data;
    // TODO : find a way at this point, to force table lines to send again pois
    this._pois = new Array<OutletPair>(this._data.length).fill(null);
  }

  get data(): Ability[] {
    return this._data;
  }

  @Input()
  public highlightIndex = -1;

  @Input()
  public title: string;

  @Output()
  public pois: EventEmitter<OutletPair[]> = new EventEmitter<OutletPair[]>();

  // tslint:disable-next-line:variable-name
  private _pois: Array<OutletPair> = [];
  // tslint:disable-next-line:variable-name
  private _data: Ability[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  public registerPoi(index: number, poi: OutletPair): void {
    this._pois[index] = poi;
    if (this._pois.length !== 0 && this._pois.every(value => isNotNullOrUndefined(value))) {
      this.pois.emit(this._pois);
    }
  }
}
