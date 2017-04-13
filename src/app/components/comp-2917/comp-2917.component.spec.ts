import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2917Component } from './comp-2917.component';

describe('Comp2917Component', () => {
  let component: Comp2917Component;
  let fixture: ComponentFixture<Comp2917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
