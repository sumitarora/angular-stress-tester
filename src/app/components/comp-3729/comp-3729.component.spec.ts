import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3729Component } from './comp-3729.component';

describe('Comp3729Component', () => {
  let component: Comp3729Component;
  let fixture: ComponentFixture<Comp3729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});