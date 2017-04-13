import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3797Component } from './comp-3797.component';

describe('Comp3797Component', () => {
  let component: Comp3797Component;
  let fixture: ComponentFixture<Comp3797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
