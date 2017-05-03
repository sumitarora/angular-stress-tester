import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp783Component } from './comp-783.component';
import { Service783Service } from '../../services/service-783.service';

describe('Comp783Component', () => {
  let component: Comp783Component;
  let fixture: ComponentFixture<Comp783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp783Component ],
providers: [Service783Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
