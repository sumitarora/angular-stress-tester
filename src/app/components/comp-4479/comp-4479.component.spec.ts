import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4479Component } from './comp-4479.component';

describe('Comp4479Component', () => {
  let component: Comp4479Component;
  let fixture: ComponentFixture<Comp4479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
