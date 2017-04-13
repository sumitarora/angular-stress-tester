import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4205Component } from './comp-4205.component';

describe('Comp4205Component', () => {
  let component: Comp4205Component;
  let fixture: ComponentFixture<Comp4205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
