import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp341Component } from './comp-341.component';
import { Service341Service } from '../../services/service-341.service';

describe('Comp341Component', () => {
  let component: Comp341Component;
  let fixture: ComponentFixture<Comp341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp341Component ],
providers: [Service341Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
