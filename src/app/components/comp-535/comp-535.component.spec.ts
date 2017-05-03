import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp535Component } from './comp-535.component';
import { Service535Service } from '../../services/service-535.service';

describe('Comp535Component', () => {
  let component: Comp535Component;
  let fixture: ComponentFixture<Comp535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp535Component ],
providers: [Service535Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
