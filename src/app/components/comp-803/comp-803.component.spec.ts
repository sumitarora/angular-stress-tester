import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp803Component } from './comp-803.component';
import { Service803Service } from '../../services/service-803.service';

describe('Comp803Component', () => {
  let component: Comp803Component;
  let fixture: ComponentFixture<Comp803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp803Component ],
providers: [Service803Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
