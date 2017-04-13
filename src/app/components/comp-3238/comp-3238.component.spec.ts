import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3238Component } from './comp-3238.component';

describe('Comp3238Component', () => {
  let component: Comp3238Component;
  let fixture: ComponentFixture<Comp3238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
