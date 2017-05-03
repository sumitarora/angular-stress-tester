import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp657Component } from './comp-657.component';
import { Service657Service } from '../../services/service-657.service';

describe('Comp657Component', () => {
  let component: Comp657Component;
  let fixture: ComponentFixture<Comp657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp657Component ],
providers: [Service657Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
