import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2416Component } from './comp-2416.component';

describe('Comp2416Component', () => {
  let component: Comp2416Component;
  let fixture: ComponentFixture<Comp2416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
