import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4446Component } from './comp-4446.component';

describe('Comp4446Component', () => {
  let component: Comp4446Component;
  let fixture: ComponentFixture<Comp4446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
