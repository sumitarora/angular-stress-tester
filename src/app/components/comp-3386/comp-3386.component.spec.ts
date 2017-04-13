import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3386Component } from './comp-3386.component';

describe('Comp3386Component', () => {
  let component: Comp3386Component;
  let fixture: ComponentFixture<Comp3386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
