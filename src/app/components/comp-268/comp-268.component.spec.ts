import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp268Component } from './comp-268.component';
import { Service268Service } from '../../services/service-268.service';

describe('Comp268Component', () => {
  let component: Comp268Component;
  let fixture: ComponentFixture<Comp268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp268Component ],
providers: [Service268Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
