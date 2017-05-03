import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp968Component } from './comp-968.component';
import { Service968Service } from '../../services/service-968.service';

describe('Comp968Component', () => {
  let component: Comp968Component;
  let fixture: ComponentFixture<Comp968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp968Component ],
providers: [Service968Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
