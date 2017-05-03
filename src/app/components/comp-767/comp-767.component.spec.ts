import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp767Component } from './comp-767.component';
import { Service767Service } from '../../services/service-767.service';

describe('Comp767Component', () => {
  let component: Comp767Component;
  let fixture: ComponentFixture<Comp767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp767Component ],
providers: [Service767Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
