import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3594Component } from './comp-3594.component';

describe('Comp3594Component', () => {
  let component: Comp3594Component;
  let fixture: ComponentFixture<Comp3594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
