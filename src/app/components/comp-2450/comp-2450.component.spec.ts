import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2450Component } from './comp-2450.component';

describe('Comp2450Component', () => {
  let component: Comp2450Component;
  let fixture: ComponentFixture<Comp2450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
