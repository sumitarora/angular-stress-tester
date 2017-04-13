import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2957Component } from './comp-2957.component';

describe('Comp2957Component', () => {
  let component: Comp2957Component;
  let fixture: ComponentFixture<Comp2957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
