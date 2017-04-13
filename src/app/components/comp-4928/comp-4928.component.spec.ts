import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4928Component } from './comp-4928.component';

describe('Comp4928Component', () => {
  let component: Comp4928Component;
  let fixture: ComponentFixture<Comp4928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
