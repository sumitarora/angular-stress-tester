import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4857Component } from './comp-4857.component';

describe('Comp4857Component', () => {
  let component: Comp4857Component;
  let fixture: ComponentFixture<Comp4857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
