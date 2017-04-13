import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4219Component } from './comp-4219.component';

describe('Comp4219Component', () => {
  let component: Comp4219Component;
  let fixture: ComponentFixture<Comp4219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
