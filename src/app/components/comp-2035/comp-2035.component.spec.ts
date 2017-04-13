import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2035Component } from './comp-2035.component';

describe('Comp2035Component', () => {
  let component: Comp2035Component;
  let fixture: ComponentFixture<Comp2035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
