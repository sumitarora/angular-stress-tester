import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3236Component } from './comp-3236.component';

describe('Comp3236Component', () => {
  let component: Comp3236Component;
  let fixture: ComponentFixture<Comp3236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
