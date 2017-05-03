import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp365Component } from './comp-365.component';
import { Service365Service } from '../../services/service-365.service';

describe('Comp365Component', () => {
  let component: Comp365Component;
  let fixture: ComponentFixture<Comp365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp365Component ],
providers: [Service365Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
