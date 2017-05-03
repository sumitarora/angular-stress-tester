import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp128Component } from './comp-128.component';
import { Service128Service } from '../../services/service-128.service';

describe('Comp128Component', () => {
  let component: Comp128Component;
  let fixture: ComponentFixture<Comp128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp128Component ],
providers: [Service128Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
