import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp446Component } from './comp-446.component';
import { Service446Service } from '../../services/service-446.service';

describe('Comp446Component', () => {
  let component: Comp446Component;
  let fixture: ComponentFixture<Comp446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp446Component ],
providers: [Service446Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
