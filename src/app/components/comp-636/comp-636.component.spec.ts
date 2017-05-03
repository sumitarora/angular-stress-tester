import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp636Component } from './comp-636.component';
import { Service636Service } from '../../services/service-636.service';

describe('Comp636Component', () => {
  let component: Comp636Component;
  let fixture: ComponentFixture<Comp636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp636Component ],
providers: [Service636Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
