import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp764Component } from './comp-764.component';
import { Service764Service } from '../../services/service-764.service';

describe('Comp764Component', () => {
  let component: Comp764Component;
  let fixture: ComponentFixture<Comp764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp764Component ],
providers: [Service764Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
