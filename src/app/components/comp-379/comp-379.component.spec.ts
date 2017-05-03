import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp379Component } from './comp-379.component';
import { Service379Service } from '../../services/service-379.service';

describe('Comp379Component', () => {
  let component: Comp379Component;
  let fixture: ComponentFixture<Comp379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp379Component ],
providers: [Service379Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
