import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp899Component } from './comp-899.component';
import { Service899Service } from '../../services/service-899.service';

describe('Comp899Component', () => {
  let component: Comp899Component;
  let fixture: ComponentFixture<Comp899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp899Component ],
providers: [Service899Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
