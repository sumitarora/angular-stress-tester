import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2119Component } from './comp-2119.component';

describe('Comp2119Component', () => {
  let component: Comp2119Component;
  let fixture: ComponentFixture<Comp2119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
