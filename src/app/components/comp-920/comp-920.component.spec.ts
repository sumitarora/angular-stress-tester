import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp920Component } from './comp-920.component';
import { Service920Service } from '../../services/service-920.service';

describe('Comp920Component', () => {
  let component: Comp920Component;
  let fixture: ComponentFixture<Comp920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp920Component ],
providers: [Service920Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
