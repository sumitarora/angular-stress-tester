import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1707Component } from './comp-1707.component';

describe('Comp1707Component', () => {
  let component: Comp1707Component;
  let fixture: ComponentFixture<Comp1707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
