import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4379Component } from './comp-4379.component';

describe('Comp4379Component', () => {
  let component: Comp4379Component;
  let fixture: ComponentFixture<Comp4379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
