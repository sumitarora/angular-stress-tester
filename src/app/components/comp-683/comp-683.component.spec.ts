import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp683Component } from './comp-683.component';
import { Service683Service } from '../../services/service-683.service';

describe('Comp683Component', () => {
  let component: Comp683Component;
  let fixture: ComponentFixture<Comp683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp683Component ],
providers: [Service683Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
