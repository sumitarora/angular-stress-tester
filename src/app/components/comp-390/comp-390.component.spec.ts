import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp390Component } from './comp-390.component';
import { Service390Service } from '../../services/service-390.service';

describe('Comp390Component', () => {
  let component: Comp390Component;
  let fixture: ComponentFixture<Comp390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp390Component ],
providers: [Service390Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
