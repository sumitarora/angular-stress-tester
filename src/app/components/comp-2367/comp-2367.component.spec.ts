import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2367Component } from './comp-2367.component';

describe('Comp2367Component', () => {
  let component: Comp2367Component;
  let fixture: ComponentFixture<Comp2367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});