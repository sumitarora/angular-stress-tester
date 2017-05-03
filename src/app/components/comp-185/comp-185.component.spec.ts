import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp185Component } from './comp-185.component';
import { Service185Service } from '../../services/service-185.service';

describe('Comp185Component', () => {
  let component: Comp185Component;
  let fixture: ComponentFixture<Comp185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp185Component ],
providers: [Service185Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
