import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4943Component } from './comp-4943.component';

describe('Comp4943Component', () => {
  let component: Comp4943Component;
  let fixture: ComponentFixture<Comp4943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
