import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2871Component } from './comp-2871.component';

describe('Comp2871Component', () => {
  let component: Comp2871Component;
  let fixture: ComponentFixture<Comp2871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
