import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2425Component } from './comp-2425.component';

describe('Comp2425Component', () => {
  let component: Comp2425Component;
  let fixture: ComponentFixture<Comp2425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
