import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3017Component } from './comp-3017.component';

describe('Comp3017Component', () => {
  let component: Comp3017Component;
  let fixture: ComponentFixture<Comp3017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
