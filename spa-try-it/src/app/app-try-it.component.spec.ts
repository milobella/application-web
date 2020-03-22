import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppTryItComponent } from './app-try-it.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppTryItComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppTryItComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'milobella-site'`, () => {
    const fixture = TestBed.createComponent(AppTryItComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('milobella-site');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppTryItComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to milobella-site!');
  });
});
