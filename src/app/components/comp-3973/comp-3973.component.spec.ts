import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3973Component } from './comp-3973.component';

describe('Comp3973Component', () => {
  let component: Comp3973Component;
  let fixture: ComponentFixture<Comp3973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
