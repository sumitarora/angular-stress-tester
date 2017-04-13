import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4661Component } from './comp-4661.component';

describe('Comp4661Component', () => {
  let component: Comp4661Component;
  let fixture: ComponentFixture<Comp4661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
