import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3543Component } from './comp-3543.component';

describe('Comp3543Component', () => {
  let component: Comp3543Component;
  let fixture: ComponentFixture<Comp3543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
