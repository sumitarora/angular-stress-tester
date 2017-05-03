import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp417Component } from './comp-417.component';
import { Service417Service } from '../../services/service-417.service';

describe('Comp417Component', () => {
  let component: Comp417Component;
  let fixture: ComponentFixture<Comp417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp417Component ],
providers: [Service417Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
