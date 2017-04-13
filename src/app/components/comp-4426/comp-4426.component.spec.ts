import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4426Component } from './comp-4426.component';

describe('Comp4426Component', () => {
  let component: Comp4426Component;
  let fixture: ComponentFixture<Comp4426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
