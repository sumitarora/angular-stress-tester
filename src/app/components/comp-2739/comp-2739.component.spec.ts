import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2739Component } from './comp-2739.component';

describe('Comp2739Component', () => {
  let component: Comp2739Component;
  let fixture: ComponentFixture<Comp2739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
