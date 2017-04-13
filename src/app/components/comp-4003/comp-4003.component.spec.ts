import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4003Component } from './comp-4003.component';

describe('Comp4003Component', () => {
  let component: Comp4003Component;
  let fixture: ComponentFixture<Comp4003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
