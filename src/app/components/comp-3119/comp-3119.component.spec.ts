import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3119Component } from './comp-3119.component';

describe('Comp3119Component', () => {
  let component: Comp3119Component;
  let fixture: ComponentFixture<Comp3119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
