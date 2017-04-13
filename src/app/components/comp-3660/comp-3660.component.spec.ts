import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3660Component } from './comp-3660.component';

describe('Comp3660Component', () => {
  let component: Comp3660Component;
  let fixture: ComponentFixture<Comp3660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
