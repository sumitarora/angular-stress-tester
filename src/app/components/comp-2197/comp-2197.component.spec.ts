import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2197Component } from './comp-2197.component';

describe('Comp2197Component', () => {
  let component: Comp2197Component;
  let fixture: ComponentFixture<Comp2197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
