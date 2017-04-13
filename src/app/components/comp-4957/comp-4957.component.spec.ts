import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4957Component } from './comp-4957.component';

describe('Comp4957Component', () => {
  let component: Comp4957Component;
  let fixture: ComponentFixture<Comp4957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
