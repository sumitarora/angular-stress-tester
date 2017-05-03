import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp472Component } from './comp-472.component';
import { Service472Service } from '../../services/service-472.service';

describe('Comp472Component', () => {
  let component: Comp472Component;
  let fixture: ComponentFixture<Comp472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp472Component ],
providers: [Service472Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
