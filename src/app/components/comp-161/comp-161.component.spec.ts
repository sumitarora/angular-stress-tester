import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp161Component } from './comp-161.component';
import { Service161Service } from '../../services/service-161.service';

describe('Comp161Component', () => {
  let component: Comp161Component;
  let fixture: ComponentFixture<Comp161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp161Component ],
providers: [Service161Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
