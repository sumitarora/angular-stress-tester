import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2223Component } from './comp-2223.component';

describe('Comp2223Component', () => {
  let component: Comp2223Component;
  let fixture: ComponentFixture<Comp2223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
