import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2379Component } from './comp-2379.component';

describe('Comp2379Component', () => {
  let component: Comp2379Component;
  let fixture: ComponentFixture<Comp2379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
