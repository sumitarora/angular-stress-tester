import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2842Component } from './comp-2842.component';

describe('Comp2842Component', () => {
  let component: Comp2842Component;
  let fixture: ComponentFixture<Comp2842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
