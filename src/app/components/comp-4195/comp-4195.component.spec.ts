import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4195Component } from './comp-4195.component';

describe('Comp4195Component', () => {
  let component: Comp4195Component;
  let fixture: ComponentFixture<Comp4195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
