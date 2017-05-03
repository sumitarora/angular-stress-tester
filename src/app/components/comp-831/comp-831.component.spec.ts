import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp831Component } from './comp-831.component';
import { Service831Service } from '../../services/service-831.service';

describe('Comp831Component', () => {
  let component: Comp831Component;
  let fixture: ComponentFixture<Comp831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp831Component ],
providers: [Service831Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
