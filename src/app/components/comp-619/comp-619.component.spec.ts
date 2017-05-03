import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp619Component } from './comp-619.component';
import { Service619Service } from '../../services/service-619.service';

describe('Comp619Component', () => {
  let component: Comp619Component;
  let fixture: ComponentFixture<Comp619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp619Component ],
providers: [Service619Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
