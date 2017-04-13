import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2707Component } from './comp-2707.component';

describe('Comp2707Component', () => {
  let component: Comp2707Component;
  let fixture: ComponentFixture<Comp2707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
