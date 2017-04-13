import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2831Component } from './comp-2831.component';

describe('Comp2831Component', () => {
  let component: Comp2831Component;
  let fixture: ComponentFixture<Comp2831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
