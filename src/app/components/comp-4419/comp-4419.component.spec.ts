import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4419Component } from './comp-4419.component';

describe('Comp4419Component', () => {
  let component: Comp4419Component;
  let fixture: ComponentFixture<Comp4419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
