import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2454Component } from './comp-2454.component';

describe('Comp2454Component', () => {
  let component: Comp2454Component;
  let fixture: ComponentFixture<Comp2454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
