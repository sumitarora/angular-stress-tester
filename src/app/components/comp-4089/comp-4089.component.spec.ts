import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4089Component } from './comp-4089.component';

describe('Comp4089Component', () => {
  let component: Comp4089Component;
  let fixture: ComponentFixture<Comp4089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
