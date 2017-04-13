import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3369Component } from './comp-3369.component';

describe('Comp3369Component', () => {
  let component: Comp3369Component;
  let fixture: ComponentFixture<Comp3369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
