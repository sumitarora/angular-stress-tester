import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2502Component } from './comp-2502.component';

describe('Comp2502Component', () => {
  let component: Comp2502Component;
  let fixture: ComponentFixture<Comp2502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
