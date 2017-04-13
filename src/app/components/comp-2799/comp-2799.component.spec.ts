import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2799Component } from './comp-2799.component';

describe('Comp2799Component', () => {
  let component: Comp2799Component;
  let fixture: ComponentFixture<Comp2799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
