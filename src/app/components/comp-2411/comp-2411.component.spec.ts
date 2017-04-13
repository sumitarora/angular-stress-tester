import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2411Component } from './comp-2411.component';

describe('Comp2411Component', () => {
  let component: Comp2411Component;
  let fixture: ComponentFixture<Comp2411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
