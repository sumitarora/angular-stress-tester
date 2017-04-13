import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2635Component } from './comp-2635.component';

describe('Comp2635Component', () => {
  let component: Comp2635Component;
  let fixture: ComponentFixture<Comp2635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
