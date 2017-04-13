import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2815Component } from './comp-2815.component';

describe('Comp2815Component', () => {
  let component: Comp2815Component;
  let fixture: ComponentFixture<Comp2815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
