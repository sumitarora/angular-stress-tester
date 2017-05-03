import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp868Component } from './comp-868.component';
import { Service868Service } from '../../services/service-868.service';

describe('Comp868Component', () => {
  let component: Comp868Component;
  let fixture: ComponentFixture<Comp868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp868Component ],
providers: [Service868Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
