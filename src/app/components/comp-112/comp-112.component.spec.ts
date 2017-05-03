import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp112Component } from './comp-112.component';
import { Service112Service } from '../../services/service-112.service';

describe('Comp112Component', () => {
  let component: Comp112Component;
  let fixture: ComponentFixture<Comp112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp112Component ],
providers: [Service112Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
