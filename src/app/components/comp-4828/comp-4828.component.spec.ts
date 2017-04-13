import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4828Component } from './comp-4828.component';

describe('Comp4828Component', () => {
  let component: Comp4828Component;
  let fixture: ComponentFixture<Comp4828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
