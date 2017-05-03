import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp238Component } from './comp-238.component';
import { Service238Service } from '../../services/service-238.service';

describe('Comp238Component', () => {
  let component: Comp238Component;
  let fixture: ComponentFixture<Comp238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp238Component ],
providers: [Service238Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
