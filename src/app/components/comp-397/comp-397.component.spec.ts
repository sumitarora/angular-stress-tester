import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp397Component } from './comp-397.component';
import { Service397Service } from '../../services/service-397.service';

describe('Comp397Component', () => {
  let component: Comp397Component;
  let fixture: ComponentFixture<Comp397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp397Component ],
providers: [Service397Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
