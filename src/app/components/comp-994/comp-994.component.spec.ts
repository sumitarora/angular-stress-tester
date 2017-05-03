import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp994Component } from './comp-994.component';
import { Service994Service } from '../../services/service-994.service';

describe('Comp994Component', () => {
  let component: Comp994Component;
  let fixture: ComponentFixture<Comp994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp994Component ],
providers: [Service994Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
