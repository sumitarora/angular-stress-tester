import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp339Component } from './comp-339.component';
import { Service339Service } from '../../services/service-339.service';

describe('Comp339Component', () => {
  let component: Comp339Component;
  let fixture: ComponentFixture<Comp339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp339Component ],
providers: [Service339Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
