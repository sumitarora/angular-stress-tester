import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4653Component } from './comp-4653.component';

describe('Comp4653Component', () => {
  let component: Comp4653Component;
  let fixture: ComponentFixture<Comp4653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
