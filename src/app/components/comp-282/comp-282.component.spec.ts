import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp282Component } from './comp-282.component';
import { Service282Service } from '../../services/service-282.service';

describe('Comp282Component', () => {
  let component: Comp282Component;
  let fixture: ComponentFixture<Comp282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp282Component ],
providers: [Service282Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
