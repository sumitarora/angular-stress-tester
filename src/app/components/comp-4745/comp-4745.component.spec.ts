import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4745Component } from './comp-4745.component';

describe('Comp4745Component', () => {
  let component: Comp4745Component;
  let fixture: ComponentFixture<Comp4745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
