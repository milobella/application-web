import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { OutletPair } from './outlet.model';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'abilities-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  set data(data: object[]) {
    this._data = data;
    // TODO : find a way at this point, to force table lines to send again pois
    this._pois = new Array<OutletPair>(this._data.length);
  }

  get data(): object[] {
    return this._data;
  }

  @Input()
  public highlightIndex = -1;

  @Output()
  public pois: EventEmitter<OutletPair[]> = new EventEmitter<OutletPair[]>();

  // tslint:disable-next-line:variable-name
  private _pois: Array<OutletPair> = [];
  // tslint:disable-next-line:variable-name
  private _data: object[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  public registerPoi(index: number, poi: OutletPair): void {
    this._pois[index] = poi;
    if (this._pois.length !== 0 && this._pois.every(value =>  isNotNullOrUndefined(value))) {
      this.pois.emit(this._pois);
    }
  }
}
