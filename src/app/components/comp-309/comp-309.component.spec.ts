import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp309Component } from './comp-309.component';
import { Service309Service } from '../../services/service-309.service';

describe('Comp309Component', () => {
  let component: Comp309Component;
  let fixture: ComponentFixture<Comp309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp309Component ],
providers: [Service309Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
