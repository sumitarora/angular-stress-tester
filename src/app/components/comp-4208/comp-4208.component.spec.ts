import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4208Component } from './comp-4208.component';

describe('Comp4208Component', () => {
  let component: Comp4208Component;
  let fixture: ComponentFixture<Comp4208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
