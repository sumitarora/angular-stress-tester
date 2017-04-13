import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2283Component } from './comp-2283.component';

describe('Comp2283Component', () => {
  let component: Comp2283Component;
  let fixture: ComponentFixture<Comp2283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
