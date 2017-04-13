import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4307Component } from './comp-4307.component';

describe('Comp4307Component', () => {
  let component: Comp4307Component;
  let fixture: ComponentFixture<Comp4307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
