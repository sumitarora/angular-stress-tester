import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4114Component } from './comp-4114.component';

describe('Comp4114Component', () => {
  let component: Comp4114Component;
  let fixture: ComponentFixture<Comp4114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
