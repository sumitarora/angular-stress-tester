import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3047Component } from './comp-3047.component';

describe('Comp3047Component', () => {
  let component: Comp3047Component;
  let fixture: ComponentFixture<Comp3047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
