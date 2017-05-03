import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp975Component } from './comp-975.component';
import { Service975Service } from '../../services/service-975.service';

describe('Comp975Component', () => {
  let component: Comp975Component;
  let fixture: ComponentFixture<Comp975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp975Component ],
providers: [Service975Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
