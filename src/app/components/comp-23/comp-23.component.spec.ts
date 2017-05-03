import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp23Component } from './comp-23.component';
import { Service23Service } from '../../services/service-23.service';

describe('Comp23Component', () => {
  let component: Comp23Component;
  let fixture: ComponentFixture<Comp23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp23Component ],
providers: [Service23Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
