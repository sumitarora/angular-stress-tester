import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2042Component } from './comp-2042.component';

describe('Comp2042Component', () => {
  let component: Comp2042Component;
  let fixture: ComponentFixture<Comp2042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
