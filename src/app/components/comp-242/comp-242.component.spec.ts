import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp242Component } from './comp-242.component';
import { Service242Service } from '../../services/service-242.service';

describe('Comp242Component', () => {
  let component: Comp242Component;
  let fixture: ComponentFixture<Comp242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp242Component ],
providers: [Service242Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
