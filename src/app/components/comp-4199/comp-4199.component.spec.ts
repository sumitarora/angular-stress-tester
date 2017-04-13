import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4199Component } from './comp-4199.component';

describe('Comp4199Component', () => {
  let component: Comp4199Component;
  let fixture: ComponentFixture<Comp4199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
