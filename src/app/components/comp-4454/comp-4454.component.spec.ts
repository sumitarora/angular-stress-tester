import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4454Component } from './comp-4454.component';

describe('Comp4454Component', () => {
  let component: Comp4454Component;
  let fixture: ComponentFixture<Comp4454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
