import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2661Component } from './comp-2661.component';

describe('Comp2661Component', () => {
  let component: Comp2661Component;
  let fixture: ComponentFixture<Comp2661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
