import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp943Component } from './comp-943.component';
import { Service943Service } from '../../services/service-943.service';

describe('Comp943Component', () => {
  let component: Comp943Component;
  let fixture: ComponentFixture<Comp943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp943Component ],
providers: [Service943Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
