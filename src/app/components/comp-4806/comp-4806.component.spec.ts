import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4806Component } from './comp-4806.component';

describe('Comp4806Component', () => {
  let component: Comp4806Component;
  let fixture: ComponentFixture<Comp4806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
