import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2515Component } from './comp-2515.component';

describe('Comp2515Component', () => {
  let component: Comp2515Component;
  let fixture: ComponentFixture<Comp2515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
