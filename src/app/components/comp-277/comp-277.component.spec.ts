import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp277Component } from './comp-277.component';
import { Service277Service } from '../../services/service-277.service';

describe('Comp277Component', () => {
  let component: Comp277Component;
  let fixture: ComponentFixture<Comp277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp277Component ],
providers: [Service277Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
