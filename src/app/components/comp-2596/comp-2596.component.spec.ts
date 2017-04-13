import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2596Component } from './comp-2596.component';

describe('Comp2596Component', () => {
  let component: Comp2596Component;
  let fixture: ComponentFixture<Comp2596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
