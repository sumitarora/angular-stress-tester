import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp347Component } from './comp-347.component';
import { Service347Service } from '../../services/service-347.service';

describe('Comp347Component', () => {
  let component: Comp347Component;
  let fixture: ComponentFixture<Comp347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp347Component ],
providers: [Service347Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
