import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2763Component } from './comp-2763.component';

describe('Comp2763Component', () => {
  let component: Comp2763Component;
  let fixture: ComponentFixture<Comp2763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
