import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4743Component } from './comp-4743.component';

describe('Comp4743Component', () => {
  let component: Comp4743Component;
  let fixture: ComponentFixture<Comp4743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
