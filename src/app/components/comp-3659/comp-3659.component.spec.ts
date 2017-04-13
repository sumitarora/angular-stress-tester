import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3659Component } from './comp-3659.component';

describe('Comp3659Component', () => {
  let component: Comp3659Component;
  let fixture: ComponentFixture<Comp3659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
