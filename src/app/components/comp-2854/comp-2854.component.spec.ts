import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2854Component } from './comp-2854.component';

describe('Comp2854Component', () => {
  let component: Comp2854Component;
  let fixture: ComponentFixture<Comp2854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
