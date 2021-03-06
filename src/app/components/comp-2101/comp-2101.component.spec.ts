import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2101Component } from './comp-2101.component';

describe('Comp2101Component', () => {
  let component: Comp2101Component;
  let fixture: ComponentFixture<Comp2101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
