import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2767Component } from './comp-2767.component';

describe('Comp2767Component', () => {
  let component: Comp2767Component;
  let fixture: ComponentFixture<Comp2767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
