import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3761Component } from './comp-3761.component';

describe('Comp3761Component', () => {
  let component: Comp3761Component;
  let fixture: ComponentFixture<Comp3761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
