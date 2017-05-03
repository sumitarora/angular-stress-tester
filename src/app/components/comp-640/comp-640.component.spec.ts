import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp640Component } from './comp-640.component';
import { Service640Service } from '../../services/service-640.service';

describe('Comp640Component', () => {
  let component: Comp640Component;
  let fixture: ComponentFixture<Comp640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp640Component ],
providers: [Service640Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
