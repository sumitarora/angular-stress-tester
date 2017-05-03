import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp69Component } from './comp-69.component';
import { Service69Service } from '../../services/service-69.service';

describe('Comp69Component', () => {
  let component: Comp69Component;
  let fixture: ComponentFixture<Comp69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp69Component ],
providers: [Service69Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
