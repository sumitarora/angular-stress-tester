import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2832Component } from './comp-2832.component';

describe('Comp2832Component', () => {
  let component: Comp2832Component;
  let fixture: ComponentFixture<Comp2832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
