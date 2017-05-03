import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp673Component } from './comp-673.component';
import { Service673Service } from '../../services/service-673.service';

describe('Comp673Component', () => {
  let component: Comp673Component;
  let fixture: ComponentFixture<Comp673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp673Component ],
providers: [Service673Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
