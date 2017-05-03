import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp179Component } from './comp-179.component';
import { Service179Service } from '../../services/service-179.service';

describe('Comp179Component', () => {
  let component: Comp179Component;
  let fixture: ComponentFixture<Comp179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp179Component ],
providers: [Service179Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
