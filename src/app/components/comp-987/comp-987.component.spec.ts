import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp987Component } from './comp-987.component';
import { Service987Service } from '../../services/service-987.service';

describe('Comp987Component', () => {
  let component: Comp987Component;
  let fixture: ComponentFixture<Comp987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp987Component ],
providers: [Service987Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
