import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2086Component } from './comp-2086.component';

describe('Comp2086Component', () => {
  let component: Comp2086Component;
  let fixture: ComponentFixture<Comp2086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
