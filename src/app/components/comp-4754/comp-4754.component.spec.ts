import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4754Component } from './comp-4754.component';

describe('Comp4754Component', () => {
  let component: Comp4754Component;
  let fixture: ComponentFixture<Comp4754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
