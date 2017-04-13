import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3416Component } from './comp-3416.component';

describe('Comp3416Component', () => {
  let component: Comp3416Component;
  let fixture: ComponentFixture<Comp3416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
