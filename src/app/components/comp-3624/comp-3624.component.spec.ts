import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3624Component } from './comp-3624.component';

describe('Comp3624Component', () => {
  let component: Comp3624Component;
  let fixture: ComponentFixture<Comp3624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});