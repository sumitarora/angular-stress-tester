import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4292Component } from './comp-4292.component';

describe('Comp4292Component', () => {
  let component: Comp4292Component;
  let fixture: ComponentFixture<Comp4292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
