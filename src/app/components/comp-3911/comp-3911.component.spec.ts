import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3911Component } from './comp-3911.component';

describe('Comp3911Component', () => {
  let component: Comp3911Component;
  let fixture: ComponentFixture<Comp3911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
