import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2934Component } from './comp-2934.component';

describe('Comp2934Component', () => {
  let component: Comp2934Component;
  let fixture: ComponentFixture<Comp2934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
