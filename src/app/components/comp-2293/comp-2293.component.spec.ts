import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2293Component } from './comp-2293.component';

describe('Comp2293Component', () => {
  let component: Comp2293Component;
  let fixture: ComponentFixture<Comp2293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
