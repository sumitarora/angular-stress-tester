import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp934Component } from './comp-934.component';
import { Service934Service } from '../../services/service-934.service';

describe('Comp934Component', () => {
  let component: Comp934Component;
  let fixture: ComponentFixture<Comp934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp934Component ],
providers: [Service934Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
