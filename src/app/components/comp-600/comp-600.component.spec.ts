import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp600Component } from './comp-600.component';
import { Service600Service } from '../../services/service-600.service';

describe('Comp600Component', () => {
  let component: Comp600Component;
  let fixture: ComponentFixture<Comp600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp600Component ],
providers: [Service600Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
