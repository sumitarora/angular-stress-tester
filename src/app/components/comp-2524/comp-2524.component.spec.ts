import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2524Component } from './comp-2524.component';

describe('Comp2524Component', () => {
  let component: Comp2524Component;
  let fixture: ComponentFixture<Comp2524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
