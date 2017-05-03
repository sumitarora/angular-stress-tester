import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp386Component } from './comp-386.component';
import { Service386Service } from '../../services/service-386.service';

describe('Comp386Component', () => {
  let component: Comp386Component;
  let fixture: ComponentFixture<Comp386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp386Component ],
providers: [Service386Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
