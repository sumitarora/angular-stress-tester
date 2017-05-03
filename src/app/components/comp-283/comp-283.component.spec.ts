import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp283Component } from './comp-283.component';
import { Service283Service } from '../../services/service-283.service';

describe('Comp283Component', () => {
  let component: Comp283Component;
  let fixture: ComponentFixture<Comp283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp283Component ],
providers: [Service283Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
