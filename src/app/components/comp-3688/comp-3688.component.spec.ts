import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3688Component } from './comp-3688.component';

describe('Comp3688Component', () => {
  let component: Comp3688Component;
  let fixture: ComponentFixture<Comp3688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
