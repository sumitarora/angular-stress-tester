import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp320Component } from './comp-320.component';
import { Service320Service } from '../../services/service-320.service';

describe('Comp320Component', () => {
  let component: Comp320Component;
  let fixture: ComponentFixture<Comp320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp320Component ],
providers: [Service320Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
