import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp293Component } from './comp-293.component';
import { Service293Service } from '../../services/service-293.service';

describe('Comp293Component', () => {
  let component: Comp293Component;
  let fixture: ComponentFixture<Comp293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp293Component ],
providers: [Service293Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
