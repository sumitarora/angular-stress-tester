import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp622Component } from './comp-622.component';
import { Service622Service } from '../../services/service-622.service';

describe('Comp622Component', () => {
  let component: Comp622Component;
  let fixture: ComponentFixture<Comp622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp622Component ],
providers: [Service622Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
