import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3242Component } from './comp-3242.component';

describe('Comp3242Component', () => {
  let component: Comp3242Component;
  let fixture: ComponentFixture<Comp3242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
