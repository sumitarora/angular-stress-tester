import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp28Component } from './comp-28.component';
import { Service28Service } from '../../services/service-28.service';

describe('Comp28Component', () => {
  let component: Comp28Component;
  let fixture: ComponentFixture<Comp28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp28Component ],
providers: [Service28Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
