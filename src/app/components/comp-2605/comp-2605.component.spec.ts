import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2605Component } from './comp-2605.component';

describe('Comp2605Component', () => {
  let component: Comp2605Component;
  let fixture: ComponentFixture<Comp2605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
