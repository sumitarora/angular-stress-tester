import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp645Component } from './comp-645.component';
import { Service645Service } from '../../services/service-645.service';

describe('Comp645Component', () => {
  let component: Comp645Component;
  let fixture: ComponentFixture<Comp645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp645Component ],
providers: [Service645Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
