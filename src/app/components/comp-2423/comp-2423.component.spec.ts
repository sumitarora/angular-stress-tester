import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2423Component } from './comp-2423.component';

describe('Comp2423Component', () => {
  let component: Comp2423Component;
  let fixture: ComponentFixture<Comp2423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
