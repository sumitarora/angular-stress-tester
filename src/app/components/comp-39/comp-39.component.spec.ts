import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp39Component } from './comp-39.component';
import { Service39Service } from '../../services/service-39.service';

describe('Comp39Component', () => {
  let component: Comp39Component;
  let fixture: ComponentFixture<Comp39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp39Component ],
providers: [Service39Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
