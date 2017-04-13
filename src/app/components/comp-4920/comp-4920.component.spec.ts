import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4920Component } from './comp-4920.component';

describe('Comp4920Component', () => {
  let component: Comp4920Component;
  let fixture: ComponentFixture<Comp4920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
