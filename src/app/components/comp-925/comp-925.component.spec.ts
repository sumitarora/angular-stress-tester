import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp925Component } from './comp-925.component';
import { Service925Service } from '../../services/service-925.service';

describe('Comp925Component', () => {
  let component: Comp925Component;
  let fixture: ComponentFixture<Comp925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp925Component ],
providers: [Service925Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
