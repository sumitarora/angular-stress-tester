import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp90Component } from './comp-90.component';
import { Service90Service } from '../../services/service-90.service';

describe('Comp90Component', () => {
  let component: Comp90Component;
  let fixture: ComponentFixture<Comp90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp90Component ],
providers: [Service90Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
