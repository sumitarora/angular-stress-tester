import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp630Component } from './comp-630.component';
import { Service630Service } from '../../services/service-630.service';

describe('Comp630Component', () => {
  let component: Comp630Component;
  let fixture: ComponentFixture<Comp630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp630Component ],
providers: [Service630Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
