import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4882Component } from './comp-4882.component';

describe('Comp4882Component', () => {
  let component: Comp4882Component;
  let fixture: ComponentFixture<Comp4882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
