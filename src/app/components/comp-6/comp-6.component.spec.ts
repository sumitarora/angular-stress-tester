import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp6Component } from './comp-6.component';
import { Service6Service } from '../../services/service-6.service';

describe('Comp6Component', () => {
  let component: Comp6Component;
  let fixture: ComponentFixture<Comp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp6Component ],
providers: [Service6Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
