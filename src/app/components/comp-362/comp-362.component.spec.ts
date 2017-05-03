import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp362Component } from './comp-362.component';
import { Service362Service } from '../../services/service-362.service';

describe('Comp362Component', () => {
  let component: Comp362Component;
  let fixture: ComponentFixture<Comp362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp362Component ],
providers: [Service362Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
