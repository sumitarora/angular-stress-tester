import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp458Component } from './comp-458.component';
import { Service458Service } from '../../services/service-458.service';

describe('Comp458Component', () => {
  let component: Comp458Component;
  let fixture: ComponentFixture<Comp458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp458Component ],
providers: [Service458Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
