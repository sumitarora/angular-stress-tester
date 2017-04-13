import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2623Component } from './comp-2623.component';

describe('Comp2623Component', () => {
  let component: Comp2623Component;
  let fixture: ComponentFixture<Comp2623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
