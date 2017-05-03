import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp498Component } from './comp-498.component';
import { Service498Service } from '../../services/service-498.service';

describe('Comp498Component', () => {
  let component: Comp498Component;
  let fixture: ComponentFixture<Comp498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp498Component ],
providers: [Service498Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
