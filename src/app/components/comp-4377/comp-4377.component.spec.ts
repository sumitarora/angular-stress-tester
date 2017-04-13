import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4377Component } from './comp-4377.component';

describe('Comp4377Component', () => {
  let component: Comp4377Component;
  let fixture: ComponentFixture<Comp4377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
