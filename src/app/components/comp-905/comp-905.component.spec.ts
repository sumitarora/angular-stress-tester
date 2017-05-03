import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp905Component } from './comp-905.component';
import { Service905Service } from '../../services/service-905.service';

describe('Comp905Component', () => {
  let component: Comp905Component;
  let fixture: ComponentFixture<Comp905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp905Component ],
providers: [Service905Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
