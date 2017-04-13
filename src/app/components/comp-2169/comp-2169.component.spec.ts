import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2169Component } from './comp-2169.component';

describe('Comp2169Component', () => {
  let component: Comp2169Component;
  let fixture: ComponentFixture<Comp2169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
