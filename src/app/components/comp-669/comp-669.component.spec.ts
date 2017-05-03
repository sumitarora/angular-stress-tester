import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp669Component } from './comp-669.component';
import { Service669Service } from '../../services/service-669.service';

describe('Comp669Component', () => {
  let component: Comp669Component;
  let fixture: ComponentFixture<Comp669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp669Component ],
providers: [Service669Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
