import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4694Component } from './comp-4694.component';

describe('Comp4694Component', () => {
  let component: Comp4694Component;
  let fixture: ComponentFixture<Comp4694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});