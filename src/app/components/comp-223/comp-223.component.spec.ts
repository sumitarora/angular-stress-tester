import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp223Component } from './comp-223.component';
import { Service223Service } from '../../services/service-223.service';

describe('Comp223Component', () => {
  let component: Comp223Component;
  let fixture: ComponentFixture<Comp223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp223Component ],
providers: [Service223Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
