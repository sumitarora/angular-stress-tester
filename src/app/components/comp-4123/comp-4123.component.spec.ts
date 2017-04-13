import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4123Component } from './comp-4123.component';

describe('Comp4123Component', () => {
  let component: Comp4123Component;
  let fixture: ComponentFixture<Comp4123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
