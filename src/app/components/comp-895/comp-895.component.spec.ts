import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp895Component } from './comp-895.component';
import { Service895Service } from '../../services/service-895.service';

describe('Comp895Component', () => {
  let component: Comp895Component;
  let fixture: ComponentFixture<Comp895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp895Component ],
providers: [Service895Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
