import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp253Component } from './comp-253.component';
import { Service253Service } from '../../services/service-253.service';

describe('Comp253Component', () => {
  let component: Comp253Component;
  let fixture: ComponentFixture<Comp253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp253Component ],
providers: [Service253Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
