import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp510Component } from './comp-510.component';
import { Service510Service } from '../../services/service-510.service';

describe('Comp510Component', () => {
  let component: Comp510Component;
  let fixture: ComponentFixture<Comp510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp510Component ],
providers: [Service510Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
