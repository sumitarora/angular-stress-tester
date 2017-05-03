import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp383Component } from './comp-383.component';
import { Service383Service } from '../../services/service-383.service';

describe('Comp383Component', () => {
  let component: Comp383Component;
  let fixture: ComponentFixture<Comp383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp383Component ],
providers: [Service383Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
