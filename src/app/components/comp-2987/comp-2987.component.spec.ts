import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2987Component } from './comp-2987.component';

describe('Comp2987Component', () => {
  let component: Comp2987Component;
  let fixture: ComponentFixture<Comp2987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
