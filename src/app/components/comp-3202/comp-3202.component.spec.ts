import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3202Component } from './comp-3202.component';

describe('Comp3202Component', () => {
  let component: Comp3202Component;
  let fixture: ComponentFixture<Comp3202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
