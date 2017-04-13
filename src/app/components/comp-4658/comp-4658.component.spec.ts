import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4658Component } from './comp-4658.component';

describe('Comp4658Component', () => {
  let component: Comp4658Component;
  let fixture: ComponentFixture<Comp4658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
