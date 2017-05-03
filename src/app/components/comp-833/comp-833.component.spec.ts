import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp833Component } from './comp-833.component';
import { Service833Service } from '../../services/service-833.service';

describe('Comp833Component', () => {
  let component: Comp833Component;
  let fixture: ComponentFixture<Comp833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp833Component ],
providers: [Service833Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
