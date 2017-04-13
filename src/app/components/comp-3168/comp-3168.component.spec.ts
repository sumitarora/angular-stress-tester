import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3168Component } from './comp-3168.component';

describe('Comp3168Component', () => {
  let component: Comp3168Component;
  let fixture: ComponentFixture<Comp3168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
