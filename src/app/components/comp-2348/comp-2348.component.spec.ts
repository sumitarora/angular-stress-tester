import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2348Component } from './comp-2348.component';

describe('Comp2348Component', () => {
  let component: Comp2348Component;
  let fixture: ComponentFixture<Comp2348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
