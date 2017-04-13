import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2520Component } from './comp-2520.component';

describe('Comp2520Component', () => {
  let component: Comp2520Component;
  let fixture: ComponentFixture<Comp2520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
