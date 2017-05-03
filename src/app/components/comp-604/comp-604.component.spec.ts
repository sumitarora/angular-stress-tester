import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp604Component } from './comp-604.component';
import { Service604Service } from '../../services/service-604.service';

describe('Comp604Component', () => {
  let component: Comp604Component;
  let fixture: ComponentFixture<Comp604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp604Component ],
providers: [Service604Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
