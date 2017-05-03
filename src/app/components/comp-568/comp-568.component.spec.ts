import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp568Component } from './comp-568.component';
import { Service568Service } from '../../services/service-568.service';

describe('Comp568Component', () => {
  let component: Comp568Component;
  let fixture: ComponentFixture<Comp568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp568Component ],
providers: [Service568Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
