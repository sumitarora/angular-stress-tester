import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp891Component } from './comp-891.component';
import { Service891Service } from '../../services/service-891.service';

describe('Comp891Component', () => {
  let component: Comp891Component;
  let fixture: ComponentFixture<Comp891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp891Component ],
providers: [Service891Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
