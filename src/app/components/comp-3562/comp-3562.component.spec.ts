import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3562Component } from './comp-3562.component';

describe('Comp3562Component', () => {
  let component: Comp3562Component;
  let fixture: ComponentFixture<Comp3562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
