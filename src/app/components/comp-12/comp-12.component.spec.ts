import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp12Component } from './comp-12.component';
import { Service12Service } from '../../services/service-12.service';

describe('Comp12Component', () => {
  let component: Comp12Component;
  let fixture: ComponentFixture<Comp12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp12Component ],
providers: [Service12Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
