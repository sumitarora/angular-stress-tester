import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3446Component } from './comp-3446.component';

describe('Comp3446Component', () => {
  let component: Comp3446Component;
  let fixture: ComponentFixture<Comp3446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
