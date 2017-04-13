import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4105Component } from './comp-4105.component';

describe('Comp4105Component', () => {
  let component: Comp4105Component;
  let fixture: ComponentFixture<Comp4105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
