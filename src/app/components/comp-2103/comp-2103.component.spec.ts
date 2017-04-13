import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2103Component } from './comp-2103.component';

describe('Comp2103Component', () => {
  let component: Comp2103Component;
  let fixture: ComponentFixture<Comp2103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
