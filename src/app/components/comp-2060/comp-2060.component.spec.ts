import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2060Component } from './comp-2060.component';

describe('Comp2060Component', () => {
  let component: Comp2060Component;
  let fixture: ComponentFixture<Comp2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
