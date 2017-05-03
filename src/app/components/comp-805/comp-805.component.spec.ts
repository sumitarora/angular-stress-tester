import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp805Component } from './comp-805.component';
import { Service805Service } from '../../services/service-805.service';

describe('Comp805Component', () => {
  let component: Comp805Component;
  let fixture: ComponentFixture<Comp805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp805Component ],
providers: [Service805Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
