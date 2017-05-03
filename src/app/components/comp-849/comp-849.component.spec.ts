import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp849Component } from './comp-849.component';
import { Service849Service } from '../../services/service-849.service';

describe('Comp849Component', () => {
  let component: Comp849Component;
  let fixture: ComponentFixture<Comp849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp849Component ],
providers: [Service849Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
