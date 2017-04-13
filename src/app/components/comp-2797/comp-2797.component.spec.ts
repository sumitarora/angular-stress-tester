import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2797Component } from './comp-2797.component';

describe('Comp2797Component', () => {
  let component: Comp2797Component;
  let fixture: ComponentFixture<Comp2797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
