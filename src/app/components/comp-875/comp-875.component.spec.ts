import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp875Component } from './comp-875.component';
import { Service875Service } from '../../services/service-875.service';

describe('Comp875Component', () => {
  let component: Comp875Component;
  let fixture: ComponentFixture<Comp875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp875Component ],
providers: [Service875Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
