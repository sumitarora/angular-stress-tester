import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1993Component } from './comp-1993.component';

describe('Comp1993Component', () => {
  let component: Comp1993Component;
  let fixture: ComponentFixture<Comp1993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
