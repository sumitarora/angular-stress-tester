import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3853Component } from './comp-3853.component';

describe('Comp3853Component', () => {
  let component: Comp3853Component;
  let fixture: ComponentFixture<Comp3853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
