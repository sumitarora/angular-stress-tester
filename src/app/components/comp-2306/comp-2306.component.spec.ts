import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2306Component } from './comp-2306.component';

describe('Comp2306Component', () => {
  let component: Comp2306Component;
  let fixture: ComponentFixture<Comp2306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
