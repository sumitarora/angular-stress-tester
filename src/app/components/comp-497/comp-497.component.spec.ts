import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp497Component } from './comp-497.component';
import { Service497Service } from '../../services/service-497.service';

describe('Comp497Component', () => {
  let component: Comp497Component;
  let fixture: ComponentFixture<Comp497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp497Component ],
providers: [Service497Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
