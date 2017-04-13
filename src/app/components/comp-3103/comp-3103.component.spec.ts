import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3103Component } from './comp-3103.component';

describe('Comp3103Component', () => {
  let component: Comp3103Component;
  let fixture: ComponentFixture<Comp3103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
