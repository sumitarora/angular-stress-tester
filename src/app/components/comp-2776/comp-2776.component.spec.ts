import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2776Component } from './comp-2776.component';

describe('Comp2776Component', () => {
  let component: Comp2776Component;
  let fixture: ComponentFixture<Comp2776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
