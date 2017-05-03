import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp551Component } from './comp-551.component';
import { Service551Service } from '../../services/service-551.service';

describe('Comp551Component', () => {
  let component: Comp551Component;
  let fixture: ComponentFixture<Comp551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp551Component ],
providers: [Service551Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
