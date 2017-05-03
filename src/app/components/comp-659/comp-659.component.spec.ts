import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp659Component } from './comp-659.component';
import { Service659Service } from '../../services/service-659.service';

describe('Comp659Component', () => {
  let component: Comp659Component;
  let fixture: ComponentFixture<Comp659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp659Component ],
providers: [Service659Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
