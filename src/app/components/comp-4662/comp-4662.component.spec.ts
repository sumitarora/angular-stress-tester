import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4662Component } from './comp-4662.component';

describe('Comp4662Component', () => {
  let component: Comp4662Component;
  let fixture: ComponentFixture<Comp4662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
