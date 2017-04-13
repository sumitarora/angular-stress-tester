import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4269Component } from './comp-4269.component';

describe('Comp4269Component', () => {
  let component: Comp4269Component;
  let fixture: ComponentFixture<Comp4269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
