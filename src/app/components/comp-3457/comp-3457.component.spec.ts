import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3457Component } from './comp-3457.component';

describe('Comp3457Component', () => {
  let component: Comp3457Component;
  let fixture: ComponentFixture<Comp3457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
