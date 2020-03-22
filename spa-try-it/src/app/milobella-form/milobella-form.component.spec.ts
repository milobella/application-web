import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilobellaFormComponent } from './milobella-form.component';

describe('MilobellaFormComponent', () => {
  let component: MilobellaFormComponent;
  let fixture: ComponentFixture<MilobellaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilobellaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilobellaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
