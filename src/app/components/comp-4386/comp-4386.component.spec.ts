import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4386Component } from './comp-4386.component';

describe('Comp4386Component', () => {
  let component: Comp4386Component;
  let fixture: ComponentFixture<Comp4386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
