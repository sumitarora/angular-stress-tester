import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp119Component } from './comp-119.component';
import { Service119Service } from '../../services/service-119.service';

describe('Comp119Component', () => {
  let component: Comp119Component;
  let fixture: ComponentFixture<Comp119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp119Component ],
providers: [Service119Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
