import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2097Component } from './comp-2097.component';

describe('Comp2097Component', () => {
  let component: Comp2097Component;
  let fixture: ComponentFixture<Comp2097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
