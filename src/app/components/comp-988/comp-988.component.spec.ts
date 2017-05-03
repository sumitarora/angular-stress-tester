import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp988Component } from './comp-988.component';
import { Service988Service } from '../../services/service-988.service';

describe('Comp988Component', () => {
  let component: Comp988Component;
  let fixture: ComponentFixture<Comp988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp988Component ],
providers: [Service988Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
