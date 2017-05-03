import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp151Component } from './comp-151.component';
import { Service151Service } from '../../services/service-151.service';

describe('Comp151Component', () => {
  let component: Comp151Component;
  let fixture: ComponentFixture<Comp151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp151Component ],
providers: [Service151Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
