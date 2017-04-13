import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3510Component } from './comp-3510.component';

describe('Comp3510Component', () => {
  let component: Comp3510Component;
  let fixture: ComponentFixture<Comp3510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
