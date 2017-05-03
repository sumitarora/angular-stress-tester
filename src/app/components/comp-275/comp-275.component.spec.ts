import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp275Component } from './comp-275.component';
import { Service275Service } from '../../services/service-275.service';

describe('Comp275Component', () => {
  let component: Comp275Component;
  let fixture: ComponentFixture<Comp275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp275Component ],
providers: [Service275Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
