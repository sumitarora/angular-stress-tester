import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp177Component } from './comp-177.component';
import { Service177Service } from '../../services/service-177.service';

describe('Comp177Component', () => {
  let component: Comp177Component;
  let fixture: ComponentFixture<Comp177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp177Component ],
providers: [Service177Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
