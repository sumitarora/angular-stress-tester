import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2072Component } from './comp-2072.component';

describe('Comp2072Component', () => {
  let component: Comp2072Component;
  let fixture: ComponentFixture<Comp2072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
