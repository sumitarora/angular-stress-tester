import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4387Component } from './comp-4387.component';

describe('Comp4387Component', () => {
  let component: Comp4387Component;
  let fixture: ComponentFixture<Comp4387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
