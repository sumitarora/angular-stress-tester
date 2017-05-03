import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp983Component } from './comp-983.component';
import { Service983Service } from '../../services/service-983.service';

describe('Comp983Component', () => {
  let component: Comp983Component;
  let fixture: ComponentFixture<Comp983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp983Component ],
providers: [Service983Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
