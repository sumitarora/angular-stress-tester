import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2047Component } from './comp-2047.component';

describe('Comp2047Component', () => {
  let component: Comp2047Component;
  let fixture: ComponentFixture<Comp2047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
