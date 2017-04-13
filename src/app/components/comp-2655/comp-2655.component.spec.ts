import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2655Component } from './comp-2655.component';

describe('Comp2655Component', () => {
  let component: Comp2655Component;
  let fixture: ComponentFixture<Comp2655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
