import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2803Component } from './comp-2803.component';

describe('Comp2803Component', () => {
  let component: Comp2803Component;
  let fixture: ComponentFixture<Comp2803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
