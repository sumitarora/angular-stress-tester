import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp214Component } from './comp-214.component';
import { Service214Service } from '../../services/service-214.service';

describe('Comp214Component', () => {
  let component: Comp214Component;
  let fixture: ComponentFixture<Comp214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp214Component ],
providers: [Service214Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
