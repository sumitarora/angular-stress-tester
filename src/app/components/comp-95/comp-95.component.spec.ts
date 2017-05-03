import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp95Component } from './comp-95.component';
import { Service95Service } from '../../services/service-95.service';

describe('Comp95Component', () => {
  let component: Comp95Component;
  let fixture: ComponentFixture<Comp95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp95Component ],
providers: [Service95Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
