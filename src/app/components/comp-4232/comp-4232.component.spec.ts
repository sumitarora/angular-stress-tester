import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4232Component } from './comp-4232.component';

describe('Comp4232Component', () => {
  let component: Comp4232Component;
  let fixture: ComponentFixture<Comp4232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
