import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2013Component } from './comp-2013.component';

describe('Comp2013Component', () => {
  let component: Comp2013Component;
  let fixture: ComponentFixture<Comp2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
