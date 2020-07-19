import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Outlet } from '../table/outlet.model';
import { Application, Graphics } from 'pixi.js';


const THICKNESS = 20; // In px

@Component({
  selector: 'abilities-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit, OnDestroy, AfterViewInit {
  public app: Application;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  @ViewChild('canvasElement')
  public canvasElement: ElementRef<HTMLCanvasElement>;

  @Input()
  set link(link: {from: Outlet, to: Outlet}) {
    this._from = link.from;
    this._to = link.to;

    if (link.from && link.to) {
      this.elementRef.nativeElement.style.left = this._from.x - THICKNESS + 'px';
      this.elementRef.nativeElement.style.top = Math.min(this._from.y, this._to.y) - THICKNESS + 'px';
      this.elementRef.nativeElement.style.width = this._to.x - this._from.x + (THICKNESS * 2) + 'px';
      this.elementRef.nativeElement.style.height = Math.abs(this._to.y - this._from.y) + (THICKNESS * 2) + 'px';
    }
  }

  get from(): Outlet {
    return this._from;
  }

  get to(): Outlet {
    return this._to;
  }

  // tslint:disable-next-line:variable-name
  private _from: Outlet = undefined;
  // tslint:disable-next-line:variable-name
  private _to: Outlet = undefined;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
  }

  @HostListener('window:resize')
  public resize(): void {
    const width = this.elementRef.nativeElement.offsetWidth;
    const height = this.elementRef.nativeElement.offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;
  }

  initialize(): void {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application({
        antialias: true,
        transparent: true,
        view: this.canvasElement.nativeElement
      });

      const curve = new Graphics();

      const width = this.elementRef.nativeElement.offsetWidth - THICKNESS * 2.0;
      curve.lineStyle(2, 0xF1A66D, 1);
      curve.bezierCurveTo(width / 3.0, -THICKNESS, 2 * width / 3.0, THICKNESS, width, 0);

      curve.position.x = THICKNESS;
      curve.position.y = THICKNESS;

      curve.lineStyle(0);
      curve.beginFill(0xF1A66D, 1);
      curve.drawCircle(0, 0, 7);
      curve.endFill();

      curve.lineStyle(0);
      curve.beginFill(0xF1A66D, 1);
      curve.drawCircle(width, 0, 7);
      curve.endFill();

      this.app.stage.addChild(curve);
    });
    this.resize();
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  destroy(): void {
    this.app.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

}
