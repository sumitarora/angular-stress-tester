import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4756Component } from './comp-4756.component';

describe('Comp4756Component', () => {
  let component: Comp4756Component;
  let fixture: ComponentFixture<Comp4756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
