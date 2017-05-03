import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp876Component } from './comp-876.component';
import { Service876Service } from '../../services/service-876.service';

describe('Comp876Component', () => {
  let component: Comp876Component;
  let fixture: ComponentFixture<Comp876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp876Component ],
providers: [Service876Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
