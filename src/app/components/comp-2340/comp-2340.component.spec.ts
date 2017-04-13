import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2340Component } from './comp-2340.component';

describe('Comp2340Component', () => {
  let component: Comp2340Component;
  let fixture: ComponentFixture<Comp2340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
