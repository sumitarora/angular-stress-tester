import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2617Component } from './comp-2617.component';

describe('Comp2617Component', () => {
  let component: Comp2617Component;
  let fixture: ComponentFixture<Comp2617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
