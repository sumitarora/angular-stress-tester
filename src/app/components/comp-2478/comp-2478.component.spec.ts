import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2478Component } from './comp-2478.component';

describe('Comp2478Component', () => {
  let component: Comp2478Component;
  let fixture: ComponentFixture<Comp2478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
