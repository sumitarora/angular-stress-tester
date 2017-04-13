import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4702Component } from './comp-4702.component';

describe('Comp4702Component', () => {
  let component: Comp4702Component;
  let fixture: ComponentFixture<Comp4702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
