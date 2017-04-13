import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2356Component } from './comp-2356.component';

describe('Comp2356Component', () => {
  let component: Comp2356Component;
  let fixture: ComponentFixture<Comp2356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
