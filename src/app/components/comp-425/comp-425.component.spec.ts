import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp425Component } from './comp-425.component';
import { Service425Service } from '../../services/service-425.service';

describe('Comp425Component', () => {
  let component: Comp425Component;
  let fixture: ComponentFixture<Comp425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp425Component ],
providers: [Service425Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
