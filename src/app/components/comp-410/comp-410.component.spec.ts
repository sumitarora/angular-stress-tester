import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp410Component } from './comp-410.component';
import { Service410Service } from '../../services/service-410.service';

describe('Comp410Component', () => {
  let component: Comp410Component;
  let fixture: ComponentFixture<Comp410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp410Component ],
providers: [Service410Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
