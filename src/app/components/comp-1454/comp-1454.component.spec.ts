import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1454Component } from './comp-1454.component';

describe('Comp1454Component', () => {
  let component: Comp1454Component;
  let fixture: ComponentFixture<Comp1454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
