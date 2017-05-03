import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp731Component } from './comp-731.component';
import { Service731Service } from '../../services/service-731.service';

describe('Comp731Component', () => {
  let component: Comp731Component;
  let fixture: ComponentFixture<Comp731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp731Component ],
providers: [Service731Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
