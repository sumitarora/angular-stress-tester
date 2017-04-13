import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4502Component } from './comp-4502.component';

describe('Comp4502Component', () => {
  let component: Comp4502Component;
  let fixture: ComponentFixture<Comp4502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
