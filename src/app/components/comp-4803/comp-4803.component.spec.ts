import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4803Component } from './comp-4803.component';

describe('Comp4803Component', () => {
  let component: Comp4803Component;
  let fixture: ComponentFixture<Comp4803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
