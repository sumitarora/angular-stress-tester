import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp227Component } from './comp-227.component';
import { Service227Service } from '../../services/service-227.service';

describe('Comp227Component', () => {
  let component: Comp227Component;
  let fixture: ComponentFixture<Comp227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp227Component ],
providers: [Service227Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
