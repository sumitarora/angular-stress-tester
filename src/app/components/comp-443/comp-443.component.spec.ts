import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp443Component } from './comp-443.component';
import { Service443Service } from '../../services/service-443.service';

describe('Comp443Component', () => {
  let component: Comp443Component;
  let fixture: ComponentFixture<Comp443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp443Component ],
providers: [Service443Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
