import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2718Component } from './comp-2718.component';

describe('Comp2718Component', () => {
  let component: Comp2718Component;
  let fixture: ComponentFixture<Comp2718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
