import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3164Component } from './comp-3164.component';

describe('Comp3164Component', () => {
  let component: Comp3164Component;
  let fixture: ComponentFixture<Comp3164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
