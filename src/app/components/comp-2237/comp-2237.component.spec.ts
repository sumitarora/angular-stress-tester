import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2237Component } from './comp-2237.component';

describe('Comp2237Component', () => {
  let component: Comp2237Component;
  let fixture: ComponentFixture<Comp2237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
