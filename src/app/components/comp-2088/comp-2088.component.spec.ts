import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2088Component } from './comp-2088.component';

describe('Comp2088Component', () => {
  let component: Comp2088Component;
  let fixture: ComponentFixture<Comp2088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
