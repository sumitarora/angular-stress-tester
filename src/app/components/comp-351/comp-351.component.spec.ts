import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp351Component } from './comp-351.component';
import { Service351Service } from '../../services/service-351.service';

describe('Comp351Component', () => {
  let component: Comp351Component;
  let fixture: ComponentFixture<Comp351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp351Component ],
providers: [Service351Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
