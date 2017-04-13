import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3914Component } from './comp-3914.component';

describe('Comp3914Component', () => {
  let component: Comp3914Component;
  let fixture: ComponentFixture<Comp3914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
