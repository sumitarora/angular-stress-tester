import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2457Component } from './comp-2457.component';

describe('Comp2457Component', () => {
  let component: Comp2457Component;
  let fixture: ComponentFixture<Comp2457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
