import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4179Component } from './comp-4179.component';

describe('Comp4179Component', () => {
  let component: Comp4179Component;
  let fixture: ComponentFixture<Comp4179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
