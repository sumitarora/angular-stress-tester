import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp269Component } from './comp-269.component';
import { Service269Service } from '../../services/service-269.service';

describe('Comp269Component', () => {
  let component: Comp269Component;
  let fixture: ComponentFixture<Comp269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp269Component ],
providers: [Service269Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
