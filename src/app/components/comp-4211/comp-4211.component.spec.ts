import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4211Component } from './comp-4211.component';

describe('Comp4211Component', () => {
  let component: Comp4211Component;
  let fixture: ComponentFixture<Comp4211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
