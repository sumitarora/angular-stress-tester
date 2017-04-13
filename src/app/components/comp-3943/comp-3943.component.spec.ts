import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3943Component } from './comp-3943.component';

describe('Comp3943Component', () => {
  let component: Comp3943Component;
  let fixture: ComponentFixture<Comp3943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
