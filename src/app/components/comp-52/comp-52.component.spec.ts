import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp52Component } from './comp-52.component';
import { Service52Service } from '../../services/service-52.service';

describe('Comp52Component', () => {
  let component: Comp52Component;
  let fixture: ComponentFixture<Comp52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp52Component ],
providers: [Service52Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
