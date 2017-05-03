import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp9Component } from './comp-9.component';
import { Service9Service } from '../../services/service-9.service';

describe('Comp9Component', () => {
  let component: Comp9Component;
  let fixture: ComponentFixture<Comp9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp9Component ],
providers: [Service9Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
