import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3313Component } from './comp-3313.component';

describe('Comp3313Component', () => {
  let component: Comp3313Component;
  let fixture: ComponentFixture<Comp3313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
