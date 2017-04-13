import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2883Component } from './comp-2883.component';

describe('Comp2883Component', () => {
  let component: Comp2883Component;
  let fixture: ComponentFixture<Comp2883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
