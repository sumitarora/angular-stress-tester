import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4238Component } from './comp-4238.component';

describe('Comp4238Component', () => {
  let component: Comp4238Component;
  let fixture: ComponentFixture<Comp4238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
