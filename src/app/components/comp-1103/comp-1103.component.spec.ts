import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1103Component } from './comp-1103.component';

describe('Comp1103Component', () => {
  let component: Comp1103Component;
  let fixture: ComponentFixture<Comp1103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
