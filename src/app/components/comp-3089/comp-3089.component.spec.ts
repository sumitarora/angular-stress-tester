import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3089Component } from './comp-3089.component';

describe('Comp3089Component', () => {
  let component: Comp3089Component;
  let fixture: ComponentFixture<Comp3089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
