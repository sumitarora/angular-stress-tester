import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1687Component } from './comp-1687.component';

describe('Comp1687Component', () => {
  let component: Comp1687Component;
  let fixture: ComponentFixture<Comp1687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});