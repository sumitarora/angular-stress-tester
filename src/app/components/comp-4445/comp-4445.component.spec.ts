import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4445Component } from './comp-4445.component';

describe('Comp4445Component', () => {
  let component: Comp4445Component;
  let fixture: ComponentFixture<Comp4445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
