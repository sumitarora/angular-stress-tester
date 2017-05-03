import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp500Component } from './comp-500.component';
import { Service500Service } from '../../services/service-500.service';

describe('Comp500Component', () => {
  let component: Comp500Component;
  let fixture: ComponentFixture<Comp500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp500Component ],
providers: [Service500Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
