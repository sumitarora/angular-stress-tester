import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4362Component } from './comp-4362.component';

describe('Comp4362Component', () => {
  let component: Comp4362Component;
  let fixture: ComponentFixture<Comp4362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
