import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4095Component } from './comp-4095.component';

describe('Comp4095Component', () => {
  let component: Comp4095Component;
  let fixture: ComponentFixture<Comp4095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
