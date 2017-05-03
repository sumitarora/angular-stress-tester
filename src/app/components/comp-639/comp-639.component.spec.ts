import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp639Component } from './comp-639.component';
import { Service639Service } from '../../services/service-639.service';

describe('Comp639Component', () => {
  let component: Comp639Component;
  let fixture: ComponentFixture<Comp639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp639Component ],
providers: [Service639Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
