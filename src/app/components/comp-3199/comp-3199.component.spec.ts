import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3199Component } from './comp-3199.component';

describe('Comp3199Component', () => {
  let component: Comp3199Component;
  let fixture: ComponentFixture<Comp3199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
