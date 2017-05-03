import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp429Component } from './comp-429.component';
import { Service429Service } from '../../services/service-429.service';

describe('Comp429Component', () => {
  let component: Comp429Component;
  let fixture: ComponentFixture<Comp429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp429Component ],
providers: [Service429Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
