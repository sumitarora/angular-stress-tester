import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2445Component } from './comp-2445.component';

describe('Comp2445Component', () => {
  let component: Comp2445Component;
  let fixture: ComponentFixture<Comp2445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
