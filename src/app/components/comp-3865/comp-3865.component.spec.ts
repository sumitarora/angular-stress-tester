import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3865Component } from './comp-3865.component';

describe('Comp3865Component', () => {
  let component: Comp3865Component;
  let fixture: ComponentFixture<Comp3865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
