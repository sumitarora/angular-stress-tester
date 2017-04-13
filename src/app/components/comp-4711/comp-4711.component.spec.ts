import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4711Component } from './comp-4711.component';

describe('Comp4711Component', () => {
  let component: Comp4711Component;
  let fixture: ComponentFixture<Comp4711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
