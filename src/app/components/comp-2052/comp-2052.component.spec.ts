import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2052Component } from './comp-2052.component';

describe('Comp2052Component', () => {
  let component: Comp2052Component;
  let fixture: ComponentFixture<Comp2052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
