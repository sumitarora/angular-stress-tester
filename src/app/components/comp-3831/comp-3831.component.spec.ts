import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3831Component } from './comp-3831.component';

describe('Comp3831Component', () => {
  let component: Comp3831Component;
  let fixture: ComponentFixture<Comp3831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
