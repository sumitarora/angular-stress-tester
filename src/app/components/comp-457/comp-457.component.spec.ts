import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp457Component } from './comp-457.component';
import { Service457Service } from '../../services/service-457.service';

describe('Comp457Component', () => {
  let component: Comp457Component;
  let fixture: ComponentFixture<Comp457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp457Component ],
providers: [Service457Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
