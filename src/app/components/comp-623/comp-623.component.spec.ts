import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp623Component } from './comp-623.component';

describe('Comp623Component', () => {
  let component: Comp623Component;
  let fixture: ComponentFixture<Comp623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
