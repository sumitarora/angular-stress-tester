import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp544Component } from './comp-544.component';
import { Service544Service } from '../../services/service-544.service';

describe('Comp544Component', () => {
  let component: Comp544Component;
  let fixture: ComponentFixture<Comp544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp544Component ],
providers: [Service544Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
