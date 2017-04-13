import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2385Component } from './comp-2385.component';

describe('Comp2385Component', () => {
  let component: Comp2385Component;
  let fixture: ComponentFixture<Comp2385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
