import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4416Component } from './comp-4416.component';

describe('Comp4416Component', () => {
  let component: Comp4416Component;
  let fixture: ComponentFixture<Comp4416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
