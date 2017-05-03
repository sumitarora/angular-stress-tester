import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp480Component } from './comp-480.component';
import { Service480Service } from '../../services/service-480.service';

describe('Comp480Component', () => {
  let component: Comp480Component;
  let fixture: ComponentFixture<Comp480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp480Component ],
providers: [Service480Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
