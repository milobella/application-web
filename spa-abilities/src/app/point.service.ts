import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  public pois: Subject<{id: string, x: number, y: number}> = new Subject();
  constructor() { }
}
