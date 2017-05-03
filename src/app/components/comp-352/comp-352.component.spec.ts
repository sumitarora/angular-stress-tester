import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp352Component } from './comp-352.component';
import { Service352Service } from '../../services/service-352.service';

describe('Comp352Component', () => {
  let component: Comp352Component;
  let fixture: ComponentFixture<Comp352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp352Component ],
providers: [Service352Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
