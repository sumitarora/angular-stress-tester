import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2082Component } from './comp-2082.component';

describe('Comp2082Component', () => {
  let component: Comp2082Component;
  let fixture: ComponentFixture<Comp2082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
