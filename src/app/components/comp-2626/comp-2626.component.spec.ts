import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2626Component } from './comp-2626.component';

describe('Comp2626Component', () => {
  let component: Comp2626Component;
  let fixture: ComponentFixture<Comp2626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
