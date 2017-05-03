import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp264Component } from './comp-264.component';
import { Service264Service } from '../../services/service-264.service';

describe('Comp264Component', () => {
  let component: Comp264Component;
  let fixture: ComponentFixture<Comp264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp264Component ],
providers: [Service264Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
