import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2291Component } from './comp-2291.component';

describe('Comp2291Component', () => {
  let component: Comp2291Component;
  let fixture: ComponentFixture<Comp2291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
