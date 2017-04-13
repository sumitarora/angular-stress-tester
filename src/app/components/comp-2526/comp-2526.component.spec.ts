import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2526Component } from './comp-2526.component';

describe('Comp2526Component', () => {
  let component: Comp2526Component;
  let fixture: ComponentFixture<Comp2526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
