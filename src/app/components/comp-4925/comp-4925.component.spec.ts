import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4925Component } from './comp-4925.component';

describe('Comp4925Component', () => {
  let component: Comp4925Component;
  let fixture: ComponentFixture<Comp4925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
