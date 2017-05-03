import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp718Component } from './comp-718.component';
import { Service718Service } from '../../services/service-718.service';

describe('Comp718Component', () => {
  let component: Comp718Component;
  let fixture: ComponentFixture<Comp718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp718Component ],
providers: [Service718Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
