import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2378Component } from './comp-2378.component';

describe('Comp2378Component', () => {
  let component: Comp2378Component;
  let fixture: ComponentFixture<Comp2378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
