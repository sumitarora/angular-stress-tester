import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp967Component } from './comp-967.component';
import { Service967Service } from '../../services/service-967.service';

describe('Comp967Component', () => {
  let component: Comp967Component;
  let fixture: ComponentFixture<Comp967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp967Component ],
providers: [Service967Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
