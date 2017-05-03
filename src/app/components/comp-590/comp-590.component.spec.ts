import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp590Component } from './comp-590.component';
import { Service590Service } from '../../services/service-590.service';

describe('Comp590Component', () => {
  let component: Comp590Component;
  let fixture: ComponentFixture<Comp590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp590Component ],
providers: [Service590Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
