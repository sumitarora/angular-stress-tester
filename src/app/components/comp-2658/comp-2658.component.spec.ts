import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2658Component } from './comp-2658.component';

describe('Comp2658Component', () => {
  let component: Comp2658Component;
  let fixture: ComponentFixture<Comp2658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
