import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp186Component } from './comp-186.component';
import { Service186Service } from '../../services/service-186.service';

describe('Comp186Component', () => {
  let component: Comp186Component;
  let fixture: ComponentFixture<Comp186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp186Component ],
providers: [Service186Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
