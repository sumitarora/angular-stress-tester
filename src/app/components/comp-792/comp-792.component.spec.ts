import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp792Component } from './comp-792.component';
import { Service792Service } from '../../services/service-792.service';

describe('Comp792Component', () => {
  let component: Comp792Component;
  let fixture: ComponentFixture<Comp792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp792Component ],
providers: [Service792Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
