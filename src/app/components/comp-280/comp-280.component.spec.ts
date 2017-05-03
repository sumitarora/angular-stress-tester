import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp280Component } from './comp-280.component';
import { Service280Service } from '../../services/service-280.service';

describe('Comp280Component', () => {
  let component: Comp280Component;
  let fixture: ComponentFixture<Comp280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp280Component ],
providers: [Service280Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
