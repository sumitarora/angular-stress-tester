import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp642Component } from './comp-642.component';
import { Service642Service } from '../../services/service-642.service';

describe('Comp642Component', () => {
  let component: Comp642Component;
  let fixture: ComponentFixture<Comp642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp642Component ],
providers: [Service642Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
