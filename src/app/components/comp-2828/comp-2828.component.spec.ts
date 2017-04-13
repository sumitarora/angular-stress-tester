import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2828Component } from './comp-2828.component';

describe('Comp2828Component', () => {
  let component: Comp2828Component;
  let fixture: ComponentFixture<Comp2828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
