import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3881Component } from './comp-3881.component';

describe('Comp3881Component', () => {
  let component: Comp3881Component;
  let fixture: ComponentFixture<Comp3881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});