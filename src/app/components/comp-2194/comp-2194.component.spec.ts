import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2194Component } from './comp-2194.component';

describe('Comp2194Component', () => {
  let component: Comp2194Component;
  let fixture: ComponentFixture<Comp2194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
