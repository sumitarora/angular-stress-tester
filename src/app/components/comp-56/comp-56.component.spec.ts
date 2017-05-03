import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp56Component } from './comp-56.component';
import { Service56Service } from '../../services/service-56.service';

describe('Comp56Component', () => {
  let component: Comp56Component;
  let fixture: ComponentFixture<Comp56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp56Component ],
providers: [Service56Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
