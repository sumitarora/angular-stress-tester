import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp243Component } from './comp-243.component';
import { Service243Service } from '../../services/service-243.service';

describe('Comp243Component', () => {
  let component: Comp243Component;
  let fixture: ComponentFixture<Comp243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp243Component ],
providers: [Service243Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
