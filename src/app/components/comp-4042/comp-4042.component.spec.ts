import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4042Component } from './comp-4042.component';

describe('Comp4042Component', () => {
  let component: Comp4042Component;
  let fixture: ComponentFixture<Comp4042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
