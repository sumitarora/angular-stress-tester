import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2574Component } from './comp-2574.component';

describe('Comp2574Component', () => {
  let component: Comp2574Component;
  let fixture: ComponentFixture<Comp2574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
