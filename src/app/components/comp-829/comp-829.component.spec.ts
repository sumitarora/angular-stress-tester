import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp829Component } from './comp-829.component';
import { Service829Service } from '../../services/service-829.service';

describe('Comp829Component', () => {
  let component: Comp829Component;
  let fixture: ComponentFixture<Comp829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp829Component ],
providers: [Service829Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
