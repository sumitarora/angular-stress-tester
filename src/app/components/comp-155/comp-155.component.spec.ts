import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp155Component } from './comp-155.component';
import { Service155Service } from '../../services/service-155.service';

describe('Comp155Component', () => {
  let component: Comp155Component;
  let fixture: ComponentFixture<Comp155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp155Component ],
providers: [Service155Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
