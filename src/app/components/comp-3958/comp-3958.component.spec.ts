import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3958Component } from './comp-3958.component';

describe('Comp3958Component', () => {
  let component: Comp3958Component;
  let fixture: ComponentFixture<Comp3958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
