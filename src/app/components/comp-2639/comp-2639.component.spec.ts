import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2639Component } from './comp-2639.component';

describe('Comp2639Component', () => {
  let component: Comp2639Component;
  let fixture: ComponentFixture<Comp2639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
