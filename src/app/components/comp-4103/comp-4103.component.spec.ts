import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4103Component } from './comp-4103.component';

describe('Comp4103Component', () => {
  let component: Comp4103Component;
  let fixture: ComponentFixture<Comp4103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
