import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3544Component } from './comp-3544.component';

describe('Comp3544Component', () => {
  let component: Comp3544Component;
  let fixture: ComponentFixture<Comp3544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
