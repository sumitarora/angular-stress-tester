import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4276Component } from './comp-4276.component';

describe('Comp4276Component', () => {
  let component: Comp4276Component;
  let fixture: ComponentFixture<Comp4276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
