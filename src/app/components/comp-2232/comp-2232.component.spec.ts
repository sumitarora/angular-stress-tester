import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2232Component } from './comp-2232.component';

describe('Comp2232Component', () => {
  let component: Comp2232Component;
  let fixture: ComponentFixture<Comp2232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
