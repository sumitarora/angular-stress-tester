import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp384Component } from './comp-384.component';
import { Service384Service } from '../../services/service-384.service';

describe('Comp384Component', () => {
  let component: Comp384Component;
  let fixture: ComponentFixture<Comp384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp384Component ],
providers: [Service384Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
