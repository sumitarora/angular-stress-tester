import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp614Component } from './comp-614.component';
import { Service614Service } from '../../services/service-614.service';

describe('Comp614Component', () => {
  let component: Comp614Component;
  let fixture: ComponentFixture<Comp614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp614Component ],
providers: [Service614Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
