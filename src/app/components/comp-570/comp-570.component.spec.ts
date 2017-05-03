import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp570Component } from './comp-570.component';
import { Service570Service } from '../../services/service-570.service';

describe('Comp570Component', () => {
  let component: Comp570Component;
  let fixture: ComponentFixture<Comp570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp570Component ],
providers: [Service570Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
