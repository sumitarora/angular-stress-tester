import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2663Component } from './comp-2663.component';

describe('Comp2663Component', () => {
  let component: Comp2663Component;
  let fixture: ComponentFixture<Comp2663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
