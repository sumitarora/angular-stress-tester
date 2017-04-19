import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2840Component } from './comp-2840.component';

describe('Comp2840Component', () => {
  let component: Comp2840Component;
  let fixture: ComponentFixture<Comp2840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});