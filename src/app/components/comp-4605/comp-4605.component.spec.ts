import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4605Component } from './comp-4605.component';

describe('Comp4605Component', () => {
  let component: Comp4605Component;
  let fixture: ComponentFixture<Comp4605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
