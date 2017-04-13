import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4563Component } from './comp-4563.component';

describe('Comp4563Component', () => {
  let component: Comp4563Component;
  let fixture: ComponentFixture<Comp4563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
