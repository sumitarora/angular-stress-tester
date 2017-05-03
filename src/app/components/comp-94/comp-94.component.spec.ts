import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp94Component } from './comp-94.component';
import { Service94Service } from '../../services/service-94.service';

describe('Comp94Component', () => {
  let component: Comp94Component;
  let fixture: ComponentFixture<Comp94Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp94Component ],
providers: [Service94Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
