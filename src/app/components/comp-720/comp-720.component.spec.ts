import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp720Component } from './comp-720.component';
import { Service720Service } from '../../services/service-720.service';

describe('Comp720Component', () => {
  let component: Comp720Component;
  let fixture: ComponentFixture<Comp720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp720Component ],
providers: [Service720Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
