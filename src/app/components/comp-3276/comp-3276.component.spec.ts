import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3276Component } from './comp-3276.component';

describe('Comp3276Component', () => {
  let component: Comp3276Component;
  let fixture: ComponentFixture<Comp3276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
