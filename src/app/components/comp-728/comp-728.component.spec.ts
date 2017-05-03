import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp728Component } from './comp-728.component';
import { Service728Service } from '../../services/service-728.service';

describe('Comp728Component', () => {
  let component: Comp728Component;
  let fixture: ComponentFixture<Comp728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp728Component ],
providers: [Service728Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
