import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1968Component } from './comp-1968.component';

describe('Comp1968Component', () => {
  let component: Comp1968Component;
  let fixture: ComponentFixture<Comp1968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
