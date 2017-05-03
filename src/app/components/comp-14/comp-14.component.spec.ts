import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp14Component } from './comp-14.component';
import { Service14Service } from '../../services/service-14.service';

describe('Comp14Component', () => {
  let component: Comp14Component;
  let fixture: ComponentFixture<Comp14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp14Component ],
providers: [Service14Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
