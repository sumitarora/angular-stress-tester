import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4741Component } from './comp-4741.component';

describe('Comp4741Component', () => {
  let component: Comp4741Component;
  let fixture: ComponentFixture<Comp4741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
