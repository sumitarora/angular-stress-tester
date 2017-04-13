import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3677Component } from './comp-3677.component';

describe('Comp3677Component', () => {
  let component: Comp3677Component;
  let fixture: ComponentFixture<Comp3677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
