import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp394Component } from './comp-394.component';
import { Service394Service } from '../../services/service-394.service';

describe('Comp394Component', () => {
  let component: Comp394Component;
  let fixture: ComponentFixture<Comp394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp394Component ],
providers: [Service394Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
