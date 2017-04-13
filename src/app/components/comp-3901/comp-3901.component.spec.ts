import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3901Component } from './comp-3901.component';

describe('Comp3901Component', () => {
  let component: Comp3901Component;
  let fixture: ComponentFixture<Comp3901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
