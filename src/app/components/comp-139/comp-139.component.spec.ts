import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp139Component } from './comp-139.component';
import { Service139Service } from '../../services/service-139.service';

describe('Comp139Component', () => {
  let component: Comp139Component;
  let fixture: ComponentFixture<Comp139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp139Component ],
providers: [Service139Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
