import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3834Component } from './comp-3834.component';

describe('Comp3834Component', () => {
  let component: Comp3834Component;
  let fixture: ComponentFixture<Comp3834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
