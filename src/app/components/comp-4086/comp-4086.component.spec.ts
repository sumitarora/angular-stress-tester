import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4086Component } from './comp-4086.component';

describe('Comp4086Component', () => {
  let component: Comp4086Component;
  let fixture: ComponentFixture<Comp4086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
