import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp594Component } from './comp-594.component';
import { Service594Service } from '../../services/service-594.service';

describe('Comp594Component', () => {
  let component: Comp594Component;
  let fixture: ComponentFixture<Comp594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp594Component ],
providers: [Service594Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
