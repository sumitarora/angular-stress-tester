import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3383Component } from './comp-3383.component';

describe('Comp3383Component', () => {
  let component: Comp3383Component;
  let fixture: ComponentFixture<Comp3383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
