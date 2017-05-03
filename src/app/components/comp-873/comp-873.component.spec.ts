import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp873Component } from './comp-873.component';
import { Service873Service } from '../../services/service-873.service';

describe('Comp873Component', () => {
  let component: Comp873Component;
  let fixture: ComponentFixture<Comp873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp873Component ],
providers: [Service873Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
