import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3866Component } from './comp-3866.component';

describe('Comp3866Component', () => {
  let component: Comp3866Component;
  let fixture: ComponentFixture<Comp3866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
