import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4646Component } from './comp-4646.component';

describe('Comp4646Component', () => {
  let component: Comp4646Component;
  let fixture: ComponentFixture<Comp4646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
