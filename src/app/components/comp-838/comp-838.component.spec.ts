import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp838Component } from './comp-838.component';
import { Service838Service } from '../../services/service-838.service';

describe('Comp838Component', () => {
  let component: Comp838Component;
  let fixture: ComponentFixture<Comp838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp838Component ],
providers: [Service838Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
