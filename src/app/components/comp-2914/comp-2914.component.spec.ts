import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2914Component } from './comp-2914.component';

describe('Comp2914Component', () => {
  let component: Comp2914Component;
  let fixture: ComponentFixture<Comp2914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
