import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2139Component } from './comp-2139.component';

describe('Comp2139Component', () => {
  let component: Comp2139Component;
  let fixture: ComponentFixture<Comp2139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
