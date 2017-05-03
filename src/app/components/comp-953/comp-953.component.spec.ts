import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp953Component } from './comp-953.component';
import { Service953Service } from '../../services/service-953.service';

describe('Comp953Component', () => {
  let component: Comp953Component;
  let fixture: ComponentFixture<Comp953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp953Component ],
providers: [Service953Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
