import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3558Component } from './comp-3558.component';

describe('Comp3558Component', () => {
  let component: Comp3558Component;
  let fixture: ComponentFixture<Comp3558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
