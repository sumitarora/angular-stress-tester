import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2671Component } from './comp-2671.component';

describe('Comp2671Component', () => {
  let component: Comp2671Component;
  let fixture: ComponentFixture<Comp2671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
