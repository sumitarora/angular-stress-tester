import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp127Component } from './comp-127.component';
import { Service127Service } from '../../services/service-127.service';

describe('Comp127Component', () => {
  let component: Comp127Component;
  let fixture: ComponentFixture<Comp127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp127Component ],
providers: [Service127Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
