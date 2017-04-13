import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3399Component } from './comp-3399.component';

describe('Comp3399Component', () => {
  let component: Comp3399Component;
  let fixture: ComponentFixture<Comp3399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
