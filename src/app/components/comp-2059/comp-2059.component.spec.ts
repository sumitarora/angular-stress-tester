import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2059Component } from './comp-2059.component';

describe('Comp2059Component', () => {
  let component: Comp2059Component;
  let fixture: ComponentFixture<Comp2059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
