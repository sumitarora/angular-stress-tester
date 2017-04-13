import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2152Component } from './comp-2152.component';

describe('Comp2152Component', () => {
  let component: Comp2152Component;
  let fixture: ComponentFixture<Comp2152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
