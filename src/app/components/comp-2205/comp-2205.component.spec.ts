import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2205Component } from './comp-2205.component';

describe('Comp2205Component', () => {
  let component: Comp2205Component;
  let fixture: ComponentFixture<Comp2205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
