import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp193Component } from './comp-193.component';
import { Service193Service } from '../../services/service-193.service';

describe('Comp193Component', () => {
  let component: Comp193Component;
  let fixture: ComponentFixture<Comp193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp193Component ],
providers: [Service193Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
