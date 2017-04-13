import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2805Component } from './comp-2805.component';

describe('Comp2805Component', () => {
  let component: Comp2805Component;
  let fixture: ComponentFixture<Comp2805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
