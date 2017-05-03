import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp412Component } from './comp-412.component';
import { Service412Service } from '../../services/service-412.service';

describe('Comp412Component', () => {
  let component: Comp412Component;
  let fixture: ComponentFixture<Comp412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp412Component ],
providers: [Service412Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
