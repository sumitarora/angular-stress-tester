import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2264Component } from './comp-2264.component';

describe('Comp2264Component', () => {
  let component: Comp2264Component;
  let fixture: ComponentFixture<Comp2264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
