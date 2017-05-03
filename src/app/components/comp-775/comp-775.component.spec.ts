import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp775Component } from './comp-775.component';
import { Service775Service } from '../../services/service-775.service';

describe('Comp775Component', () => {
  let component: Comp775Component;
  let fixture: ComponentFixture<Comp775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp775Component ],
providers: [Service775Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
