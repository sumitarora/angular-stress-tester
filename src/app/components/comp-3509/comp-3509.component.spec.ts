import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3509Component } from './comp-3509.component';

describe('Comp3509Component', () => {
  let component: Comp3509Component;
  let fixture: ComponentFixture<Comp3509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
