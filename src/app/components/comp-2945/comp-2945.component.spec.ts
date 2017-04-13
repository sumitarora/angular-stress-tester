import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2945Component } from './comp-2945.component';

describe('Comp2945Component', () => {
  let component: Comp2945Component;
  let fixture: ComponentFixture<Comp2945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
