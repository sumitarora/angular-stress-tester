import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3883Component } from './comp-3883.component';

describe('Comp3883Component', () => {
  let component: Comp3883Component;
  let fixture: ComponentFixture<Comp3883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});