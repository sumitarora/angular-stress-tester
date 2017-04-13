import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2598Component } from './comp-2598.component';

describe('Comp2598Component', () => {
  let component: Comp2598Component;
  let fixture: ComponentFixture<Comp2598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
