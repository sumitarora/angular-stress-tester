import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3717Component } from './comp-3717.component';

describe('Comp3717Component', () => {
  let component: Comp3717Component;
  let fixture: ComponentFixture<Comp3717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
