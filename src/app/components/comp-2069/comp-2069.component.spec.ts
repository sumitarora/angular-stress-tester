import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2069Component } from './comp-2069.component';

describe('Comp2069Component', () => {
  let component: Comp2069Component;
  let fixture: ComponentFixture<Comp2069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
