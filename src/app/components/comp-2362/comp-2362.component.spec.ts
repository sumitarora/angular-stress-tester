import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2362Component } from './comp-2362.component';

describe('Comp2362Component', () => {
  let component: Comp2362Component;
  let fixture: ComponentFixture<Comp2362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
