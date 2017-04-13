import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3919Component } from './comp-3919.component';

describe('Comp3919Component', () => {
  let component: Comp3919Component;
  let fixture: ComponentFixture<Comp3919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
