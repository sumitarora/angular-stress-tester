import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp67Component } from './comp-67.component';
import { Service67Service } from '../../services/service-67.service';

describe('Comp67Component', () => {
  let component: Comp67Component;
  let fixture: ComponentFixture<Comp67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp67Component ],
providers: [Service67Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
