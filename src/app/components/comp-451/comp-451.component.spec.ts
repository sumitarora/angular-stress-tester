import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp451Component } from './comp-451.component';
import { Service451Service } from '../../services/service-451.service';

describe('Comp451Component', () => {
  let component: Comp451Component;
  let fixture: ComponentFixture<Comp451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp451Component ],
providers: [Service451Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
