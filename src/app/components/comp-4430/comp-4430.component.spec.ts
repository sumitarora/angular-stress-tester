import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4430Component } from './comp-4430.component';

describe('Comp4430Component', () => {
  let component: Comp4430Component;
  let fixture: ComponentFixture<Comp4430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
