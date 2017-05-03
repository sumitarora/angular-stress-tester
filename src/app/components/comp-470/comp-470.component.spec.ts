import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp470Component } from './comp-470.component';
import { Service470Service } from '../../services/service-470.service';

describe('Comp470Component', () => {
  let component: Comp470Component;
  let fixture: ComponentFixture<Comp470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp470Component ],
providers: [Service470Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
