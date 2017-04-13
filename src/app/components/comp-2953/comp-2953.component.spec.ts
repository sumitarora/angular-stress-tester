import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2953Component } from './comp-2953.component';

describe('Comp2953Component', () => {
  let component: Comp2953Component;
  let fixture: ComponentFixture<Comp2953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
