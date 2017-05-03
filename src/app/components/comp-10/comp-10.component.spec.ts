import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp10Component } from './comp-10.component';
import { Service10Service } from '../../services/service-10.service';

describe('Comp10Component', () => {
  let component: Comp10Component;
  let fixture: ComponentFixture<Comp10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp10Component ],
providers: [Service10Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
