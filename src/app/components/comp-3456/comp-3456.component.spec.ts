import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3456Component } from './comp-3456.component';

describe('Comp3456Component', () => {
  let component: Comp3456Component;
  let fixture: ComponentFixture<Comp3456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
