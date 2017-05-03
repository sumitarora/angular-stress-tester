import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp747Component } from './comp-747.component';
import { Service747Service } from '../../services/service-747.service';

describe('Comp747Component', () => {
  let component: Comp747Component;
  let fixture: ComponentFixture<Comp747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp747Component ],
providers: [Service747Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
