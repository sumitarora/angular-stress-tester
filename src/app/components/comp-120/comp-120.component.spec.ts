import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp120Component } from './comp-120.component';
import { Service120Service } from '../../services/service-120.service';

describe('Comp120Component', () => {
  let component: Comp120Component;
  let fixture: ComponentFixture<Comp120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp120Component ],
providers: [Service120Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
