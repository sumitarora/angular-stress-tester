import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2611Component } from './comp-2611.component';

describe('Comp2611Component', () => {
  let component: Comp2611Component;
  let fixture: ComponentFixture<Comp2611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
