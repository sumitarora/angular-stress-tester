import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2296Component } from './comp-2296.component';

describe('Comp2296Component', () => {
  let component: Comp2296Component;
  let fixture: ComponentFixture<Comp2296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
