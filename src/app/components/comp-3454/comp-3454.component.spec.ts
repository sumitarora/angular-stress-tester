import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3454Component } from './comp-3454.component';

describe('Comp3454Component', () => {
  let component: Comp3454Component;
  let fixture: ComponentFixture<Comp3454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
