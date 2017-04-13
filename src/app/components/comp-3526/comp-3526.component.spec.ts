import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3526Component } from './comp-3526.component';

describe('Comp3526Component', () => {
  let component: Comp3526Component;
  let fixture: ComponentFixture<Comp3526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
