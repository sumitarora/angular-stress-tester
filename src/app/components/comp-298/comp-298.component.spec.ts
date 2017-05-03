import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp298Component } from './comp-298.component';
import { Service298Service } from '../../services/service-298.service';

describe('Comp298Component', () => {
  let component: Comp298Component;
  let fixture: ComponentFixture<Comp298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp298Component ],
providers: [Service298Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
