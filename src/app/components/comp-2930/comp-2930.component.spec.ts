import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2930Component } from './comp-2930.component';

describe('Comp2930Component', () => {
  let component: Comp2930Component;
  let fixture: ComponentFixture<Comp2930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
