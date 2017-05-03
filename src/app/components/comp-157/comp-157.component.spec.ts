import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp157Component } from './comp-157.component';
import { Service157Service } from '../../services/service-157.service';

describe('Comp157Component', () => {
  let component: Comp157Component;
  let fixture: ComponentFixture<Comp157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp157Component ],
providers: [Service157Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
