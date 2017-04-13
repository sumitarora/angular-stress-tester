import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3815Component } from './comp-3815.component';

describe('Comp3815Component', () => {
  let component: Comp3815Component;
  let fixture: ComponentFixture<Comp3815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
