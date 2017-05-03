import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp416Component } from './comp-416.component';
import { Service416Service } from '../../services/service-416.service';

describe('Comp416Component', () => {
  let component: Comp416Component;
  let fixture: ComponentFixture<Comp416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp416Component ],
providers: [Service416Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
