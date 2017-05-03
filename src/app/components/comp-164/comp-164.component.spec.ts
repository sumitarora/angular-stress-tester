import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp164Component } from './comp-164.component';
import { Service164Service } from '../../services/service-164.service';

describe('Comp164Component', () => {
  let component: Comp164Component;
  let fixture: ComponentFixture<Comp164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp164Component ],
providers: [Service164Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
