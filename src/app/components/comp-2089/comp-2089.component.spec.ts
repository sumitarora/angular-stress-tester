import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2089Component } from './comp-2089.component';

describe('Comp2089Component', () => {
  let component: Comp2089Component;
  let fixture: ComponentFixture<Comp2089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
