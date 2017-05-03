import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp487Component } from './comp-487.component';
import { Service487Service } from '../../services/service-487.service';

describe('Comp487Component', () => {
  let component: Comp487Component;
  let fixture: ComponentFixture<Comp487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp487Component ],
providers: [Service487Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
