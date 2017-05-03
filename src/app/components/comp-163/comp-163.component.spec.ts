import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp163Component } from './comp-163.component';
import { Service163Service } from '../../services/service-163.service';

describe('Comp163Component', () => {
  let component: Comp163Component;
  let fixture: ComponentFixture<Comp163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp163Component ],
providers: [Service163Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
