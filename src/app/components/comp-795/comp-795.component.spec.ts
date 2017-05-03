import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp795Component } from './comp-795.component';
import { Service795Service } from '../../services/service-795.service';

describe('Comp795Component', () => {
  let component: Comp795Component;
  let fixture: ComponentFixture<Comp795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp795Component ],
providers: [Service795Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
