import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp703Component } from './comp-703.component';
import { Service703Service } from '../../services/service-703.service';

describe('Comp703Component', () => {
  let component: Comp703Component;
  let fixture: ComponentFixture<Comp703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp703Component ],
providers: [Service703Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
