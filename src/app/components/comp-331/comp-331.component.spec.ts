import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp331Component } from './comp-331.component';
import { Service331Service } from '../../services/service-331.service';

describe('Comp331Component', () => {
  let component: Comp331Component;
  let fixture: ComponentFixture<Comp331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp331Component ],
providers: [Service331Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
