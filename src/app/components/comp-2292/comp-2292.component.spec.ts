import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2292Component } from './comp-2292.component';

describe('Comp2292Component', () => {
  let component: Comp2292Component;
  let fixture: ComponentFixture<Comp2292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
