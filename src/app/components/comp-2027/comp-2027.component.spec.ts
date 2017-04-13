import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2027Component } from './comp-2027.component';

describe('Comp2027Component', () => {
  let component: Comp2027Component;
  let fixture: ComponentFixture<Comp2027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
