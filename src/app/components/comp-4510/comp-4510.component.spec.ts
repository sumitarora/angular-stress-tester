import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4510Component } from './comp-4510.component';

describe('Comp4510Component', () => {
  let component: Comp4510Component;
  let fixture: ComponentFixture<Comp4510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
