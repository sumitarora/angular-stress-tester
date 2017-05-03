import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp229Component } from './comp-229.component';
import { Service229Service } from '../../services/service-229.service';

describe('Comp229Component', () => {
  let component: Comp229Component;
  let fixture: ComponentFixture<Comp229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp229Component ],
providers: [Service229Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
