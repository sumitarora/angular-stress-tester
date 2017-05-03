import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp343Component } from './comp-343.component';
import { Service343Service } from '../../services/service-343.service';

describe('Comp343Component', () => {
  let component: Comp343Component;
  let fixture: ComponentFixture<Comp343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp343Component ],
providers: [Service343Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
