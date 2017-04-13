import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4230Component } from './comp-4230.component';

describe('Comp4230Component', () => {
  let component: Comp4230Component;
  let fixture: ComponentFixture<Comp4230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
