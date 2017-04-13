import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3086Component } from './comp-3086.component';

describe('Comp3086Component', () => {
  let component: Comp3086Component;
  let fixture: ComponentFixture<Comp3086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
