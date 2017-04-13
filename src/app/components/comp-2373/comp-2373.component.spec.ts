import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2373Component } from './comp-2373.component';

describe('Comp2373Component', () => {
  let component: Comp2373Component;
  let fixture: ComponentFixture<Comp2373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
