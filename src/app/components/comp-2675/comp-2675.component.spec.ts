import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2675Component } from './comp-2675.component';

describe('Comp2675Component', () => {
  let component: Comp2675Component;
  let fixture: ComponentFixture<Comp2675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
