import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp387Component } from './comp-387.component';
import { Service387Service } from '../../services/service-387.service';

describe('Comp387Component', () => {
  let component: Comp387Component;
  let fixture: ComponentFixture<Comp387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp387Component ],
providers: [Service387Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
