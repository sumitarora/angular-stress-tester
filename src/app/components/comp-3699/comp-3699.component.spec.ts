import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3699Component } from './comp-3699.component';

describe('Comp3699Component', () => {
  let component: Comp3699Component;
  let fixture: ComponentFixture<Comp3699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
