import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4831Component } from './comp-4831.component';

describe('Comp4831Component', () => {
  let component: Comp4831Component;
  let fixture: ComponentFixture<Comp4831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});