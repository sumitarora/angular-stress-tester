import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3208Component } from './comp-3208.component';

describe('Comp3208Component', () => {
  let component: Comp3208Component;
  let fixture: ComponentFixture<Comp3208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
