import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2745Component } from './comp-2745.component';

describe('Comp2745Component', () => {
  let component: Comp2745Component;
  let fixture: ComponentFixture<Comp2745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
