import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4643Component } from './comp-4643.component';

describe('Comp4643Component', () => {
  let component: Comp4643Component;
  let fixture: ComponentFixture<Comp4643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
