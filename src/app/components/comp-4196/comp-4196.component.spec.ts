import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4196Component } from './comp-4196.component';

describe('Comp4196Component', () => {
  let component: Comp4196Component;
  let fixture: ComponentFixture<Comp4196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
