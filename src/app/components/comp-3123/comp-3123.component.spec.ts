import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3123Component } from './comp-3123.component';

describe('Comp3123Component', () => {
  let component: Comp3123Component;
  let fixture: ComponentFixture<Comp3123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
