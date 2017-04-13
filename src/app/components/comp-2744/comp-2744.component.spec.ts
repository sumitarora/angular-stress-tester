import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2744Component } from './comp-2744.component';

describe('Comp2744Component', () => {
  let component: Comp2744Component;
  let fixture: ComponentFixture<Comp2744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
