import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp430Component } from './comp-430.component';
import { Service430Service } from '../../services/service-430.service';

describe('Comp430Component', () => {
  let component: Comp430Component;
  let fixture: ComponentFixture<Comp430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp430Component ],
providers: [Service430Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
