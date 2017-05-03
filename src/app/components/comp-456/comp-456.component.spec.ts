import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp456Component } from './comp-456.component';
import { Service456Service } from '../../services/service-456.service';

describe('Comp456Component', () => {
  let component: Comp456Component;
  let fixture: ComponentFixture<Comp456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp456Component ],
providers: [Service456Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
