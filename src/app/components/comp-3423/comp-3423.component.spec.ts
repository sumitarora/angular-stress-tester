import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3423Component } from './comp-3423.component';

describe('Comp3423Component', () => {
  let component: Comp3423Component;
  let fixture: ComponentFixture<Comp3423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
