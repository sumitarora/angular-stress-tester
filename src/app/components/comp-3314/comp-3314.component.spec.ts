import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3314Component } from './comp-3314.component';

describe('Comp3314Component', () => {
  let component: Comp3314Component;
  let fixture: ComponentFixture<Comp3314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
