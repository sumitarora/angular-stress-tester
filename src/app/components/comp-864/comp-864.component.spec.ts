import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp864Component } from './comp-864.component';
import { Service864Service } from '../../services/service-864.service';

describe('Comp864Component', () => {
  let component: Comp864Component;
  let fixture: ComponentFixture<Comp864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp864Component ],
providers: [Service864Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
