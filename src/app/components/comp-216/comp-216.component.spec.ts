import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp216Component } from './comp-216.component';
import { Service216Service } from '../../services/service-216.service';

describe('Comp216Component', () => {
  let component: Comp216Component;
  let fixture: ComponentFixture<Comp216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp216Component ],
providers: [Service216Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
