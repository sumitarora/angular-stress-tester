import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2253Component } from './comp-2253.component';

describe('Comp2253Component', () => {
  let component: Comp2253Component;
  let fixture: ComponentFixture<Comp2253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
