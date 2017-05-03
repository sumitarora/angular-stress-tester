import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp439Component } from './comp-439.component';
import { Service439Service } from '../../services/service-439.service';

describe('Comp439Component', () => {
  let component: Comp439Component;
  let fixture: ComponentFixture<Comp439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp439Component ],
providers: [Service439Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
