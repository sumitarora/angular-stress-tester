import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3382Component } from './comp-3382.component';

describe('Comp3382Component', () => {
  let component: Comp3382Component;
  let fixture: ComponentFixture<Comp3382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
