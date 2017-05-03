import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp284Component } from './comp-284.component';
import { Service284Service } from '../../services/service-284.service';

describe('Comp284Component', () => {
  let component: Comp284Component;
  let fixture: ComponentFixture<Comp284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp284Component ],
providers: [Service284Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
