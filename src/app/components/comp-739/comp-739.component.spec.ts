import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp739Component } from './comp-739.component';
import { Service739Service } from '../../services/service-739.service';

describe('Comp739Component', () => {
  let component: Comp739Component;
  let fixture: ComponentFixture<Comp739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp739Component ],
providers: [Service739Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
