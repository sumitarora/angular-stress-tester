import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3230Component } from './comp-3230.component';

describe('Comp3230Component', () => {
  let component: Comp3230Component;
  let fixture: ComponentFixture<Comp3230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
