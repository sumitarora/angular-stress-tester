import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2833Component } from './comp-2833.component';

describe('Comp2833Component', () => {
  let component: Comp2833Component;
  let fixture: ComponentFixture<Comp2833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
