import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp650Component } from './comp-650.component';
import { Service650Service } from '../../services/service-650.service';

describe('Comp650Component', () => {
  let component: Comp650Component;
  let fixture: ComponentFixture<Comp650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp650Component ],
providers: [Service650Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
