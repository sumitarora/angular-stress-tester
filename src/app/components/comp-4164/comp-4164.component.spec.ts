import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4164Component } from './comp-4164.component';

describe('Comp4164Component', () => {
  let component: Comp4164Component;
  let fixture: ComponentFixture<Comp4164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
