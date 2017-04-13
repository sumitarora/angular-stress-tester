import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2774Component } from './comp-2774.component';

describe('Comp2774Component', () => {
  let component: Comp2774Component;
  let fixture: ComponentFixture<Comp2774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
