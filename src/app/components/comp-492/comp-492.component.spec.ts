import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp492Component } from './comp-492.component';
import { Service492Service } from '../../services/service-492.service';

describe('Comp492Component', () => {
  let component: Comp492Component;
  let fixture: ComponentFixture<Comp492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp492Component ],
providers: [Service492Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
