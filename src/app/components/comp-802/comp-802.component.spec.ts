import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp802Component } from './comp-802.component';
import { Service802Service } from '../../services/service-802.service';

describe('Comp802Component', () => {
  let component: Comp802Component;
  let fixture: ComponentFixture<Comp802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp802Component ],
providers: [Service802Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
