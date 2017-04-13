import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2556Component } from './comp-2556.component';

describe('Comp2556Component', () => {
  let component: Comp2556Component;
  let fixture: ComponentFixture<Comp2556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
