import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2440Component } from './comp-2440.component';

describe('Comp2440Component', () => {
  let component: Comp2440Component;
  let fixture: ComponentFixture<Comp2440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});