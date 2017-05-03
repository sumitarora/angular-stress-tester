import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp752Component } from './comp-752.component';
import { Service752Service } from '../../services/service-752.service';

describe('Comp752Component', () => {
  let component: Comp752Component;
  let fixture: ComponentFixture<Comp752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp752Component ],
providers: [Service752Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
