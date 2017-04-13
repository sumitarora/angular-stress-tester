import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3151Component } from './comp-3151.component';

describe('Comp3151Component', () => {
  let component: Comp3151Component;
  let fixture: ComponentFixture<Comp3151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
